import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(process.cwd(), ".vercel", "output", "static");
const MIN_INCOMING = 2;
const EXCLUDE_ROUTES = new Set(["/thank-you/"]);

if (!existsSync(ROOT)) {
  console.error(`[audit-internal-links] Missing build output at ${ROOT}. Run npm run build first.`);
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

function extractHrefTargets(html) {
  const hrefs = html.match(/href=["']([^"']+)["']/gi) ?? [];
  const targets = [];
  for (const h of hrefs) {
    const raw = h.replace(/^href=["']/, "").replace(/["']$/, "");
    if (
      raw.startsWith("http://") ||
      raw.startsWith("https://") ||
      raw.startsWith("mailto:") ||
      raw.startsWith("tel:") ||
      raw.startsWith("javascript:") ||
      raw.startsWith("#")
    ) {
      continue;
    }
    const path = raw.split("#")[0].split("?")[0];
    if (!path.startsWith("/")) continue;
    const normalized = path === "/" || path.endsWith("/") ? path : `${path}/`;
    targets.push(normalized);
  }
  return targets;
}

const files = walk(ROOT);
const routes = [];
const routeToFile = new Map();
for (const file of files) {
  const route = routeFromFile(file);
  routes.push(route);
  routeToFile.set(route, file);
}

const existing = new Set(routes);
const incoming = new Map(routes.map((r) => [r, new Set()]));

for (const [route, file] of routeToFile.entries()) {
  const html = readFileSync(file, "utf8");
  const targets = extractHrefTargets(html);
  for (const target of targets) {
    if (!existing.has(target)) continue;
    incoming.get(target)?.add(route);
  }
}

const lowInlinkRoutes = [];
for (const route of routes) {
  if (route === "/") continue;
  if (EXCLUDE_ROUTES.has(route)) continue;
  const count = incoming.get(route)?.size ?? 0;
  if (count < MIN_INCOMING) lowInlinkRoutes.push({ route, incoming: count });
}

console.log(`[audit-internal-links] Files scanned: ${files.length}`);
console.log(`[audit-internal-links] minimum incoming links: ${MIN_INCOMING}`);
console.log(`[audit-internal-links] excluded routes: ${[...EXCLUDE_ROUTES].join(", ") || "(none)"}`);
console.log(`[audit-internal-links] routes below threshold: ${lowInlinkRoutes.length}`);

if (lowInlinkRoutes.length > 0) {
  console.log("\n[audit-internal-links] sample routes below threshold:");
  for (const row of lowInlinkRoutes.slice(0, 10)) {
    console.log(`- ${row.route} (${row.incoming})`);
  }
  console.error("\n[audit-internal-links] FAIL: internal-link coverage gate failed.");
  process.exit(1);
}

console.log("\n[audit-internal-links] PASS: all eligible routes meet internal-link threshold.");
