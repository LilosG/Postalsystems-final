import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://sandiegocommercialmailboxes.com";
const DIST_DIR = path.resolve(process.argv[2] || "dist");
const DRY_RUN = process.env.DRY_RUN === "1";

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((part) => {
      if (part.length === 0) return part;
      if (part.toUpperCase() === part && part.length <= 4) return part;
      return part[0].toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function injectJsonLd(html, json) {
  const scriptTag = `<script type="application/ld+json">${json}</script>`;
  const headClose = "</head>";
  const idx = html.toLowerCase().lastIndexOf(headClose);
  if (idx === -1) {
    return scriptTag + html;
  }
  return html.slice(0, idx) + scriptTag + html.slice(idx);
}

async function collectHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name === "index.html") {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  try {
    await fs.access(DIST_DIR);
  } catch {
    console.error(`Dist directory not found at: ${DIST_DIR}`);
    process.exit(1);
  }

  const files = await collectHtmlFiles(DIST_DIR);
  console.log(`Scanning ${files.length} HTML files under ${DIST_DIR}...`);

  for (const filePath of files) {
    const rel = path.relative(DIST_DIR, filePath);
    let webPath = "/" + rel.replace(/index\.html$/, "");
    if (!webPath.endsWith("/")) webPath += "/";

    const segments = webPath.split("/").filter(Boolean);

    // We might have paths like:
    // ["client","services","slug"]
    // ["client","service-areas","city","service"]
    const servicesIdx = segments.indexOf("services");
    const areasIdx = segments.indexOf("service-areas");

    let isServiceDetail = false;
    let serviceSlug = null;
    let locationSlug = null;

    if (servicesIdx !== -1 && segments.length === servicesIdx + 2) {
      // .../services/<service>/
      isServiceDetail = true;
      serviceSlug = segments[servicesIdx + 1];
    } else if (areasIdx !== -1 && segments.length === areasIdx + 3) {
      // .../service-areas/<city>/<service>/
      isServiceDetail = true;
      locationSlug = segments[areasIdx + 1];
      serviceSlug = segments[areasIdx + 2];
    }

    console.log(`- Checking ${webPath} (segments=${JSON.stringify(segments)})`);

    if (!isServiceDetail) {
      continue;
    }

    let html = await fs.readFile(filePath, "utf8");

    if (/"@type"\s*:\s*"Service"/.test(html)) {
      console.log(`  -> Skipping, Service JSON-LD already present.`);
      continue;
    }

    // Public-facing path should NOT include /client
    let publicPath = webPath.replace(/^\/client/, "");
    if (!publicPath.startsWith("/")) publicPath = "/" + publicPath;

    const canonicalUrl = SITE_URL + publicPath;
    const serviceName = slugToTitle(serviceSlug);
    const locationName = locationSlug
      ? slugToTitle(locationSlug) + ", CA"
      : "San Diego, CA";

    const serviceJson = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      "name": serviceName,
      "serviceType": serviceName,
      "url": canonicalUrl,
      "areaServed": {
        "@type": "Place",
        "name": locationName,
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "San Diego Commercial Mailboxes",
        "url": SITE_URL,
      },
    };

    const jsonString = JSON.stringify(serviceJson);

    if (DRY_RUN) {
      console.log(`  [DRY RUN] Would add Service JSON-LD to ${publicPath}`);
    } else {
      const newHtml = injectJsonLd(html, jsonString);
      await fs.writeFile(filePath, newHtml, "utf8");
      console.log(`  + Added Service JSON-LD to ${publicPath}`);
    }
  }

  console.log("Finished Service schema pass.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
