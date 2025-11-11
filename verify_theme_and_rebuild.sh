#!/usr/bin/env bash
set -euo pipefail
cd "${1:-$PWD}"

echo "🧪 Checking BaseLayout import for theme.css…"
BASE=src/layouts/BaseLayout.astro
if ! grep -q 'styles/theme.css' "$BASE"; then
  cp "$BASE" "_backup.BaseLayout.$(date +%s).astro"
  awk '1; END{print "import \"../styles/theme.css\";"}' "$BASE" | sponge "$BASE" 2>/dev/null || {
    # awk fallback that preserves frontmatter block
    node -e '
      const fs=require("fs"); const p=process.argv[1];
      let s=fs.readFileSync(p,"utf8");
      s=s.replace(/---\\s*\\n/, m=>m+"import \\"../styles/theme.css\\";\\n");
      fs.writeFileSync(p,s);
    ' "$BASE"
  }
  echo "✅ Injected theme import into $BASE"
else
  echo "✓ theme.css already imported in $BASE"
fi

echo "🧪 Checking that key pages use BaseLayout…"
MISS=$(comm -23 <(grep -R --include="*.astro" -l "" src/pages | sort) <(grep -R --include="*.astro" -n "BaseLayout" src/pages | cut -d: -f1 | sort) || true)
if [ -n "$MISS" ]; then
  echo "⚠️  Wrapping the following with BaseLayout:"
  echo "$MISS"
  node - <<'NODE'
  const fs=require('fs'),path=require('path');
  for (const file of fs.readFileSync(0,'utf8').trim().split(/\n+/)) {
    if(!file) continue;
    let s=fs.readFileSync(file,'utf8');
    if(/BaseLayout/.test(s)) continue;
    const hasFM=s.startsWith('---'); let fm='', body=s;
    if(hasFM){const i=s.indexOf('---',3); fm=s.slice(0,i+3); body=s.slice(i+3);}
    const dir=path.dirname(file), rel=path.posix.relative(dir,'src/layouts')||'.';
    const imp=`import BaseLayout from "${rel}/BaseLayout.astro";`;
    const head = (fm?fm.replace(/^---\s*/,'').replace(/---\s*$/,''):'');
    const needImp = !head.includes(imp);
    const titleLine = 'const pageTitle = "Postal Systems"; const desc = "";';
    const newFM = `---\n${titleLine}\n${needImp?imp+'\n':''}${head}\n---\n`;
    const wrapped = `${newFM}<BaseLayout title={pageTitle} description={desc}>\n${body.trim()}\n</BaseLayout>\n`;
    fs.writeFileSync(file, wrapped);
  }
NODE
else
  echo "✓ All pages already use BaseLayout"
fi

echo "🧪 Ensuring theme file exists and is non-empty…"
if [ ! -s src/styles/theme.css ]; then
  mkdir -p src/styles
  cat > src/styles/theme.css <<'CSS'
:root { --ps-blue:#0a3a75; --ps-red:#e03131; --ps-bg:#f8fafc; }
body { background: var(--ps-bg); }
.section-hero { background: var(--ps-blue); color: white; }
.btn-primary { background: var(--ps-red); color:#fff; border-radius:.5rem; padding:.625rem 1rem; display:inline-block }
CSS
  echo "✅ Created src/styles/theme.css (minimal)"
fi

echo "🧹 Cleaning old build & rebuilding…"
rm -rf dist .astro || true
npx astro build

echo "🔍 Quick sanity check: does index.html reference bundled CSS?"
if ! grep -q '/_astro/.*\.css' dist/index.html; then
  echo "❌ No CSS bundle reference found in dist/index.html"
  exit 1
fi
echo "✅ CSS bundle present. Now serve with:"
echo "   npx serve -s dist -l 5050"
echo "   (then hard refresh: Cmd+Shift+R or add ?v=$(date +%s) to the URL)"
