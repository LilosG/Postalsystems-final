import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";

function copyIfExists(src, dst) {
  if (!existsSync(src)) return false;
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  return true;
}

const root = process.cwd();

// dist/client
const distClient = join(root, "dist", "client");
const didDist =
  copyIfExists(join(distClient, "sitemap-index.xml"), join(distClient, "sitemap.xml")) ||
  copyIfExists(join(distClient, "sitemap-0.xml"), join(distClient, "sitemap.xml"));

// vercel static output (this is what actually gets deployed for static files)
const vercelStatic = join(root, ".vercel", "output", "static");
const didVercel =
  copyIfExists(join(vercelStatic, "sitemap-index.xml"), join(vercelStatic, "sitemap.xml")) ||
  copyIfExists(join(vercelStatic, "sitemap-0.xml"), join(vercelStatic, "sitemap.xml"));

if (didDist) console.log("[alias-sitemap] Created alias in dist/client: sitemap.xml");
if (didVercel) console.log("[alias-sitemap] Created alias in .vercel/output/static: sitemap.xml");

if (!didDist && !didVercel) {
  console.log("[alias-sitemap] NOTE: no sitemap files found yet (run after astro build).");
}
