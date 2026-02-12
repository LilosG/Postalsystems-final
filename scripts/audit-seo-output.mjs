import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(process.cwd(), ".vercel", "output", "static");

if (!existsSync(ROOT)) {
  console.error(`[audit-seo-output] Missing build output at ${ROOT}. Run npm run build first.`);
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (full.endsWith(".html")) out.push(full);
  }
  return out;
}

function routeFromFile(file) {
  const rel = file.replace(`${ROOT}/`, "");
  if (!rel.endsWith("index.html")) return `/${rel}`;
  const p = `/${rel.replace(/index\.html$/, "")}`;
  return p === "//" ? "/" : p;
}

const htmlFiles = walk(ROOT);
const titleMax = 60;
const descMin = 120;
const descMax = 160;

let titlesTooLong = [];
let descTooLong = [];
let descTooShort = [];
let localBusinessMissingHours = [];
let legacyBrokenRouteRefs = [];

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  const html = readFileSync(file, "utf8");

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (title.length > titleMax) titlesTooLong.push({ route, length: title.length, title });

  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : "";
  if (desc.length > descMax) descTooLong.push({ route, length: desc.length, desc });
  if (desc.length < descMin) descTooShort.push({ route, length: desc.length, desc });

  const jsonLdScripts = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) ?? [];
  for (const script of jsonLdScripts) {
    const payload = script
      .replace(/^[\s\S]*?>/, "")
      .replace(/<\/script>\s*$/i, "")
      .trim();
    let parsed;
    try {
      parsed = JSON.parse(payload);
    } catch {
      continue;
    }
    const nodes = Array.isArray(parsed) ? parsed : [parsed];
    for (const node of nodes) {
      if (node && typeof node === "object" && node["@type"] === "LocalBusiness") {
        if (!("openingHours" in node) && !("openingHoursSpecification" in node)) {
          localBusinessMissingHours.push(route);
        }
      }
    }
  }

  if (/\/service-areas\/(anaheim|irvine|santa-ana)\//i.test(html)) {
    legacyBrokenRouteRefs.push(route);
  }
}

function printSample(name, arr, key) {
  if (arr.length === 0) return;
  console.log(`\n[audit-seo-output] ${name} sample:`);
  for (const row of arr.slice(0, 5)) {
    console.log(`- ${row.route} (${row.length}) ${row[key]}`);
  }
}

console.log(`[audit-seo-output] Files scanned: ${htmlFiles.length}`);
console.log(`[audit-seo-output] titles > ${titleMax}: ${titlesTooLong.length}`);
console.log(`[audit-seo-output] descriptions > ${descMax}: ${descTooLong.length}`);
console.log(`[audit-seo-output] descriptions < ${descMin}: ${descTooShort.length}`);
console.log(`[audit-seo-output] LocalBusiness missing hours: ${localBusinessMissingHours.length}`);
console.log(`[audit-seo-output] legacy anaheim/irvine/santa-ana refs: ${legacyBrokenRouteRefs.length}`);

printSample(`titles > ${titleMax}`, titlesTooLong, "title");
printSample(`descriptions > ${descMax}`, descTooLong, "desc");
printSample(`descriptions < ${descMin}`, descTooShort, "desc");

const hasFailure =
  titlesTooLong.length > 0 ||
  descTooLong.length > 0 ||
  descTooShort.length > 0 ||
  localBusinessMissingHours.length > 0 ||
  legacyBrokenRouteRefs.length > 0;

if (hasFailure) {
  console.error("\n[audit-seo-output] FAIL: one or more SEO quality gates failed.");
  process.exit(1);
}

console.log("\n[audit-seo-output] PASS: all SEO quality gates passed.");
