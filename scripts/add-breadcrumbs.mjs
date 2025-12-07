import fs from "fs";
import path from "path";

const SITE_URL = "https://sandiegocommercialmailboxes.com";

function walkHtmlFiles(rootDir) {
  const results = [];
  if (!fs.existsSync(rootDir)) return results;

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        results.push(full);
      }
    }
  }

  walk(rootDir);
  return results;
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function formatTitle(slug) {
  const map = { cbu: "CBU", "4c": "4C", ada: "ADA", usps: "USPS" };
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => {
      const lower = part.toLowerCase();
      if (map[lower]) return map[lower];
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function buildBreadcrumbItems(pathname, canonical) {
  const items = [];
  const base = SITE_URL.replace(/\/+$/, "");
  items.push({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: `${base}/`,
  });

  const segments = pathname.split("/").filter(Boolean);

  // Home page: no breadcrumb JSON-LD
  if (segments.length === 0) {
    return [];
  }

  // /services/
  if (segments.length === 1 && segments[0] === "services") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${base}/services/`,
    });
    return items;
  }

  // /services/[service]/
  if (segments.length === 2 && segments[0] === "services") {
    const serviceSlug = segments[1];
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${base}/services/`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name: formatTitle(serviceSlug),
      item: canonical,
    });
    return items;
  }

  // /service-areas/
  if (segments.length === 1 && segments[0] === "service-areas") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${base}/service-areas/`,
    });
    return items;
  }

  // /service-areas/[city]/
  if (segments.length === 2 && segments[0] === "service-areas") {
    const citySlug = segments[1];
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${base}/service-areas/`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name: formatTitle(citySlug),
      item: canonical,
    });
    return items;
  }

  // /service-areas/[city]/[service]/
  if (segments.length === 3 && segments[0] === "service-areas") {
    const citySlug = segments[1];
    const serviceSlug = segments[2];
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${base}/service-areas/`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name: formatTitle(citySlug),
      item: `${base}/service-areas/${citySlug}/`,
    });
    items.push({
      "@type": "ListItem",
      position: 4,
      name: formatTitle(serviceSlug),
      item: canonical,
    });
    return items;
  }

  // /about/
  if (segments.length === 1 && segments[0] === "about") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: canonical,
    });
    return items;
  }

  // /contact/
  if (segments.length === 1 && segments[0] === "contact") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: canonical,
    });
    return items;
  }

  // Fallback: Home > [Current page]
  items.push({
    "@type": "ListItem",
    position: 2,
    name: formatTitle(segments[segments.length - 1]),
    item: canonical,
  });
  return items;
}

function injectBreadcrumb(html, breadcrumbJson) {
  const snippet =
    `<script type="application/ld+json">` +
    JSON.stringify(breadcrumbJson) +
    `</script>`;
  const idx = html.lastIndexOf("</body>");
  if (idx === -1) {
    return html + snippet;
  }
  return html.slice(0, idx) + snippet + html.slice(idx);
}

const baseArg = process.argv[2] || "dist";

const roots = [
  path.join(baseArg, "client"),
  ".vercel/output/static",
];

for (const root of roots) {
  if (!fs.existsSync(root)) {
    continue;
  }

  const files = walkHtmlFiles(root);
  for (const file of files) {
    let html = fs.readFileSync(file, "utf8");

    // Skip if BreadcrumbList already exists
    if (html.includes('"@type":"BreadcrumbList"')) {
      continue;
    }

    const canonical = extractCanonical(html);
    if (!canonical) {
      continue;
    }

    let urlObj;
    try {
      urlObj = new URL(canonical);
    } catch {
      continue;
    }

    const items = buildBreadcrumbItems(urlObj.pathname, canonical);
    if (!items || items.length < 2) {
      continue;
    }

    const breadcrumbJson = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const updated = injectBreadcrumb(html, breadcrumbJson);
    if (updated !== html) {
      fs.writeFileSync(file, updated, "utf8");
      console.log(`+ Added BreadcrumbList to ${file}`);
    }
  }
}

console.log("Done adding BreadcrumbList JSON-LD.");
