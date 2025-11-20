import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const inputDir = path.join(root, "public", "images", "postal-systems");
const mapPath = path.join(root, "src", "data", "image-map.json");
const manifestPath = path.join(root, "src", "data", "images.json");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  ensureDir(inputDir);

  if (!fs.existsSync(mapPath)) {
    const files = fs
      .readdirSync(inputDir)
      .filter((f) => /\.(jpe?g|png)$/i.test(f));

    const map = files.map((file) => {
      const base = file.replace(/\.[^.]+$/, "");
      return {
        file,
        key: slugify(base),
        slug: "",
        alt: "",
      };
    });

    ensureDir(path.dirname(mapPath));
    fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
    console.log("Created src/data/image-map.json");
    console.log(
      "Fill in key, slug, and alt for each image, then run this script again.",
    );
    return;
  }

  const raw = fs.readFileSync(mapPath, "utf8");
  const entries = JSON.parse(raw);
  const manifest = {};

  for (const entry of entries) {
    const { file, key, slug, alt } = entry;
    if (!file || !key || !slug || !alt) {
      console.log("Skipping because key, slug, or alt is missing:", file);
      continue;
    }

    const inputPath = path.join(inputDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log("Source not found, skipping:", inputPath);
      continue;
    }

    const outputFile = slugify(slug) + ".webp";
    const outputPath = path.join(inputDir, outputFile);

    console.log("Processing", file, "->", outputFile);

    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outputPath);

    manifest[key] = {
      src: "/images/postal-systems/" + outputFile,
      alt,
    };
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("Wrote manifest to src/data/images.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
