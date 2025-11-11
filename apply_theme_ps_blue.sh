#!/usr/bin/env bash
set -euo pipefail

ROOT="$HOME/Desktop/postalsystems-final"
cd "$ROOT"

# 0) Safety first: create a throwaway branch/backup
if git rev-parse --git-dir >/dev/null 2>&1; then
  git add -A || true
  git commit -m "pre-theme-apply checkpoint" || true
  git switch -c theme-usps-blue-$(date +%Y%m%d-%H%M%S)
fi
mkdir -p _backup
cp -a src/layouts/BaseLayout.astro "_backup/BaseLayout.astro.$(date +%s)" 2>/dev/null || true

# 1) Tailwind config: define USPS colors
if [ -f tailwind.config.mjs ]; then
  node -e '
    const fs=require("fs");
    let t=fs.readFileSync("tailwind.config.mjs","utf8");
    if(!/theme:/.test(t)) t=t.replace(/export default \{/, "export default { theme: {},");
    if(!/extend:/.test(t)) t=t.replace(/theme:\s*\{/, "theme: { extend: {},");
    // add colors only once
    if(!/postal:\s*\{/.test(t)) {
      t=t.replace(/extend:\s*\{/, `extend: {
        colors: {
          postal: {
            blue: "#0E377B",   // deep USPS blue (primary backgrounds)
            navy: "#0B2C63",   // darker strip/hero band
            sky:  "#EAF2FF",   // light panels/cards
            red:  "#D62E2E",   // accent CTA
            gray: "#F5F7FB"    // section backgrounds
          }
        },`);
    }
    fs.writeFileSync("tailwind.config.mjs",t);
  '
fi

# 2) Global theme CSS (utilities + components)
mkdir -p src/styles
cat > src/styles/theme.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Typography + base */
@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-white text-gray-900 antialiased; }
  h1,h2,h3 { @apply font-semibold tracking-tight; }
  a { @apply text-postal-blue; }
  .page-band { @apply bg-postal-navy text-white; }
  .section { @apply py-12 md:py-16; }
  .section-muted { @apply bg-postal-gray; }
  .card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
}

/* Buttons */
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

# 3) Ensure every page can inherit the theme via BaseLayout
#    (import the stylesheet once inside the layout head)
LAYOUT="src/layouts/BaseLayout.astro"
mkdir -p src/layouts
if [ ! -f "$LAYOUT" ]; then
  # Minimal layout if missing
  cat > "$LAYOUT" <<'ASTRO'
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
  <body class="min-h-screen bg-white text-gray-900">
    <slot />
  </body>
</html>
ASTRO
fi

# If layout exists, idempotently inject the theme import once.
node -e '
  const fs=require("fs"); const p="src/layouts/BaseLayout.astro";
  let s=fs.readFileSync(p,"utf8");
  if(!s.includes('+"\"../styles/theme.css\""+')) {
    // insert after frontmatter line ---
    s=s.replace(/---\n/,(m)=>m+`import "../styles/theme.css";\n`);
    fs.writeFileSync(p,s);
  }
'

# 4) Optional: add a reusable hero band (matches your screenshot #1)
#    Only adds if not present already.
node -e '
  const fs=require("fs"); const p="src/layouts/BaseLayout.astro";
  let s=fs.readFileSync(p,"utf8");
  if(!s.includes("page-band")) {
    s = s.replace(/<body[^>]*>/,
      `$&\n    <header class=\\"page-band\\">\n      <div class=\\"max-w-6xl mx-auto px-4 py-2 text-xs flex items-center justify-between\\">\n        <div>USPS-approved • Licensed & Insured • Since 2005</div>\n        <a href=\\"tel:16194614787\\" class=\\"underline\\">(619) 461-4787</a>\n      </div>\n    </header>\n`);
    // add footer if not present
    if(!/\\<footer/.test(s)) {
      s = s.replace(/<\\/body>/,
        `  <footer class=\\"section-muted\\">\n      <div class=\\"max-w-6xl mx-auto px-4 py-10 text-sm grid gap-6 md:grid-cols-3\\">\n        <div>\n          <div class=\\"font-semibold\\">Postal Systems</div>\n          <div>USPS-approved installations across San Diego County. Also serving Temecula, Riverside County & Orange County.</div>\n        </div>\n        <div>\n          <div class=\\"font-semibold mb-2\\">Contact</div>\n          <div>Phone: (619) 461-4787</div>\n          <div>Email: info@postalsystemspro.com</div>\n        </div>\n        <div>\n          <div class=\\"font-semibold mb-2\\">Licensed</div>\n          <div>CA C-10, #904106. Bonded & insured.</div>\n        </div>\n      </div>\n    </footer>\n  </body>`);\n    }\n    fs.writeFileSync(p,s);\n  }\n'

# 5) Quick audit: which .astro pages are NOT using BaseLayout?
echo "Scanning for pages not using BaseLayout..."
grep -R --include="*.astro" -n "BaseLayout" src/pages | cut -d: -f1 | sort -u > /tmp/_with_layout.txt || true
grep -R --include="*.astro" -l "" src/pages | sort -u > /tmp/_all_pages.txt
comm -23 /tmp/_all_pages.txt /tmp/_with_layout.txt > /tmp/_without_layout.txt || true
echo "Pages without BaseLayout (if any):"
cat /tmp/_without_layout.txt || true

# 6) Rebuild + your existing audit if present
if [ -f ./fix_and_read_audit.sh ]; then
  ./fix_and_read_audit.sh
else
  npx astro build || true
fi

echo "✅ USPS blue theme applied globally (theme.css via BaseLayout)."
echo "ℹ️ Review the list above; consider wrapping those pages with <BaseLayout>."
