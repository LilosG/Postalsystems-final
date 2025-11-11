#!/usr/bin/env bash
set -euo pipefail
cd "$HOME/Desktop/postalsystems-final"

targets=(
  "src/pages/_debug-assets.astro"
  "src/pages/about.astro"
  "src/pages/blog/[post].astro"
  "src/pages/blog/index.astro"
  "src/pages/contact.astro"
  "src/pages/index.astro"
  "src/pages/projects.astro"
  "src/pages/services/index.astro"
)

node - <<'NODE'
const fs=require('fs'), path=require('path');

const targets = [
  "src/pages/_debug-assets.astro",
  "src/pages/about.astro",
  "src/pages/blog/[post].astro",
  "src/pages/blog/index.astro",
  "src/pages/contact.astro",
  "src/pages/index.astro",
  "src/pages/projects.astro",
  "src/pages/services/index.astro",
];

for (const file of targets) {
  if (!fs.existsSync(file)) continue;
  let s = fs.readFileSync(file, 'utf8');

  // Skip if already using BaseLayout
  if (/BaseLayout/.test(s)) { console.log('✓ already wrapped:', file); continue; }

  // Split frontmatter if present
  let fmStart = s.indexOf('---');
  let fmEnd = -1, fm = '', body = s;
  if (fmStart === 0) {
    fmEnd = s.indexOf('---', 3);
    if (fmEnd > 0) {
      fm = s.slice(0, fmEnd+3);
      body = s.slice(fmEnd+3);
    }
  }

  const dir = path.dirname(file);
  const rel = path.posix.relative(dir, 'src/layouts') || '.';
  const importLine = `import BaseLayout from "${rel}/BaseLayout.astro";`;

  // Build frontmatter block
  let innerFM = '';
  if (fm) innerFM = fm.replace(/^---\s*[\r\n]*/, '').replace(/---\s*$/, '');
  if (!new RegExp(importLine.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).test(innerFM)) {
    innerFM = `${importLine}\n` + innerFM;
  }
  if (!/const\s+pageTitle/.test(innerFM)) {
    const titleGuess = path.basename(file).replace(/\.astro$/,'').replace(/\[.*?\]/g,'').replace(/index$/,'Home').replace(/-/g,' ');
    innerFM = `const pageTitle = "${titleGuess.charAt(0).toUpperCase()+titleGuess.slice(1)} | Postal Systems";\nconst desc = "";\n` + innerFM;
  }
  const newFM = `---\n${innerFM.trim()}\n---\n`;

  // Wrap body with BaseLayout while preserving existing markup
  const wrapped = `${newFM}<BaseLayout title={pageTitle} description={desc}>\n${body.trim()}\n</BaseLayout>\n`;

  fs.writeFileSync(file, wrapped);
  console.log('• wrapped with BaseLayout:', file);
}
NODE

# Rebuild (your helper prints Lighthouse + links if present)
if [ -f ./fix_and_read_audit.sh ]; then
  ./fix_and_read_audit.sh
else
  npx astro build || true
fi

echo "Done. Restart server: npx serve -s dist -l 5050"
