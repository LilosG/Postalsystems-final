import { existsSync, readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const targets = [
  { slug: "orange-county", suffix: "Orange County, CA" },
  { slug: "riverside-county", suffix: "Riverside County, CA" },
];

const META_RE = /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i;
const DESC_MAX = 155;

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function truncateAtWord(value, max) {
  if (value.length <= max) return value;
  const cut = value.slice(0, max + 1);
  const idx = cut.lastIndexOf(" ");
  return (idx > 30 ? cut.slice(0, idx) : value.slice(0, max)).replace(/[\s,;:-]+$/, "").trim();
}

function patchRoot(rootDir) {
  let changed = 0;
  for (const t of targets) {
    const base = join(rootDir, "service-areas", t.slug);
    if (!existsSync(base)) continue;

    const htmlFiles = walk(base).filter((p) => p.endsWith("index.html"));
    for (const f of htmlFiles) {
      const s = readFileSync(f, "utf8");
      const m = s.match(META_RE);
      if (!m) continue;

      const oldDesc = m[1].trim();
      if (!oldDesc) continue;

      let newDesc = oldDesc;
      if (!oldDesc.includes(t.suffix)) {
        const sep = oldDesc.endsWith(".") ? " " : ". ";
        newDesc = `${oldDesc}${sep}Serving ${t.suffix}.`;
      }

      newDesc = truncateAtWord(newDesc, DESC_MAX);

      const s2 = s.replace(META_RE, (full) => full.replace(m[1], newDesc));
      if (s2 !== s) {
        writeFileSync(f, s2);
        changed++;
      }
    }
  }
  return changed;
}

const distClient = join(process.cwd(), "dist", "client");
const vercelStatic = join(process.cwd(), ".vercel", "output", "static");

const a = patchRoot(distClient);
const b = patchRoot(vercelStatic);

console.log(`[fix-county-meta-descriptions] Updated ${a} files in dist/client`);
console.log(`[fix-county-meta-descriptions] Updated ${b} files in .vercel/output/static`);
