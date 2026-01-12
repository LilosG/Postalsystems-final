import fs from "fs/promises";
import path from "path";

const ROOT = process.argv[2] || "dist";

// Update these if brand assets or price range change.
const CONFIG = {
  "Postal Systems": {
    priceRange: "$$-$$$", // adjust if you prefer something else
    image: "https://sandiegocommercialmailboxes.com/images/postal-systems/postal-systems-logo-blue.png",
  },
  "San Diego Commercial Mailboxes": {
    priceRange: "$$-$$$", // adjust if needed
    image: "https://sandiegocommercialmailboxes.com/images/postal-systems/postal-systems-logo-blue.png",
  },
};

async function walkDir(dir, out) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walkDir(full, out);
    } else if (e.isFile() && e.name === "index.html") {
      out.push(full);
    }
  }
}

function updateJsonLd(jsonText) {
  let data;
  try {
    data = JSON.parse(jsonText);
  } catch {
    return null;
  }

  let changed = false;

  function walk(node) {
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (!node || typeof node !== "object") return;

    if (node["@type"] === "LocalBusiness" && typeof node.name === "string") {
      const cfg = CONFIG[node.name];
      if (cfg) {
        if (!("priceRange" in node)) {
          node.priceRange = cfg.priceRange;
          changed = true;
        }
        if (!("image" in node)) {
          node.image = cfg.image;
          changed = true;
        }
      }
    }

    for (const v of Object.values(node)) {
      walk(v);
    }
  }

  walk(data);
  return changed ? JSON.stringify(data) : null;
}

async function processFile(filePath) {
  let html = await fs.readFile(filePath, "utf8");
  const re =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  let changed = false;

  html = html.replace(re, (match, jsonText) => {
    const trimmed = jsonText.trim();
    if (!trimmed) return match;
    const updated = updateJsonLd(trimmed);
    if (!updated) return match;
    changed = true;
    return match.replace(trimmed, updated);
  });

  if (changed) {
    await fs.writeFile(filePath, html, "utf8");
    console.log("+ Updated LocalBusiness JSON-LD in", filePath);
  }
}

async function main() {
  const files = [];
  await walkDir(ROOT, files);
  console.log(`Scanning ${files.length} HTML files under ${ROOT}...`);
  for (const f of files) {
    await processFile(f);
  }
  console.log("Done updating LocalBusiness optionals.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
