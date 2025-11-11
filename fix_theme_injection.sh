#!/usr/bin/env bash
set -euo pipefail
ROOT="$HOME/Desktop/postalsystems-final"
cd "$ROOT"

# 0) Safety snapshot
if git rev-parse --git-dir >/dev/null 2>&1; then
  git add -A || true
  git commit -m "checkpoint before theme fix" || true
fi

# 1) Ensure USPS theme tokens exist
mkdir -p src/styles
cat > src/styles/theme.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body { @apply bg-white text-gray-900 antialiased; }
  a { @apply text-postal-blue; }
  .page-band { @apply bg-postal-navy text-white; }
  .section { @apply py-12 md:py-16; }
  .section-muted { @apply bg-postal-gray; }
  .card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
}

@layer components {
  .btn { @apply inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition; }
  .btn-primary { @apply btn bg-postal-red text-white hover:opacity-90; }
  .btn-secondary { @apply btn bg-white text-postal-blue border border-postal-blue hover:bg-postal-sky; }
  .chip { @apply inline-flex px-3 py-1 text-xs rounded-full bg-postal-sky text-postal-blue; }
  .kpi { @apply card p-4 text-center; }
  .kpi .num { @apply text-xl font-bold; }
  .section-title { @apply text-xl md:text-2xl font-semibold mb-2; }
}
CSS

# 2) Make sure Tailwind knows the colors (idempotent)
if [ -f tailwind.config.mjs ]; then
  node - <<'NODE'
const fs=require('fs');let t=fs.readFileSync('tailwind.config.mjs','utf8');
if(!/theme:\s*\{/.test(t)) t=t.replace(/export default \{/, 'export default { theme: {},');
if(!/extend:\s*\{/.test(t)) t=t.replace(/theme:\s*\{/, 'theme: { extend: {},');
if(!/colors:\s*\{\s*postal:/.test(t)){
  t=t.replace(/extend:\s*\{/, `extend: {
    colors: {
      postal: {
        blue: "#0E377B",
        navy: "#0B2C63",
        sky:  "#EAF2FF",
        red:  "#D62E2E",
        gray: "#F5F7FB"
      }
    },`);
}
fs.writeFileSync('tailwind.config.mjs',t);
console.log('tailwind.config.mjs updated with postal colors');
NODE
fi

# 3) Ensure BaseLayout exists and imports the theme (no syntax errors this time)
mkdir -p src/layouts
if [ ! -f src/layouts/BaseLayout.astro ]; then
  cat > src/layouts/BaseLayout.astro <<'ASTRO'
---
import "../styles/theme.css";
const { title = "Postal Systems", description = "", url = "", schema } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {url && <link rel="canonical" href={url} />}
    <slot name="head" />
    {schema && <script type="application/ld+json" is:inline set:html={JSON.stringify(schema)}></script>}
  </head>
  <body class="min-h-screen">
    <slot />
  </body>
</html>
ASTRO
else
  node - <<'NODE'
const fs=require('fs');const p='src/layouts/BaseLayout.astro';
let s=fs.readFileSync(p,'utf8');
if(!s.includes('../styles/theme.css')){
  s=s.replace(/---\s*\n/, m=>m+'import "../styles/theme.css";\n');
  fs.writeFileSync(p,s);
  console.log('Injected theme import into BaseLayout.astro');
}else{
  console.log('Theme import already present in BaseLayout.astro');
}
NODE
fi

# 4) Quick report: which pages do NOT use BaseLayout?
echo "—— Pages missing BaseLayout (these may look unstyled) ——"
ALL=$(grep -R --include="*.astro" -l "" src/pages | sort -u || true)
WITH=$(grep -R --include="*.astro" -n "BaseLayout" src/pages | cut -d: -f1 | sort -u || true)
comm -23 <(printf "%s\n" $ALL) <(printf "%s\n" $WITH) || true
echo "———————————————————————————————————————————————"

# 5) Rebuild + quick audit
if [ -f ./fix_and_read_audit.sh ]; then
  ./fix_and_read_audit.sh
else
  npx astro build || true
fi

echo "✅ USPS theme wired via BaseLayout + theme.css. Restart your local server:"
echo "   npx serve -s dist -l 5050"
