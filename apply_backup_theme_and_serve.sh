#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

TS=$(date +%s)
mkdir -p .restore_backups/src/pages .restore_backups/src/layouts .restore_backups/src/styles

SRC_INDEX=$(ls __backup/index.astro.bak-* 2>/dev/null | sort | tail -n1)
SRC_LAYOUT=$(ls __backup/SiteLayout.astro.bak-* 2>/dev/null | sort | tail -n1)
SRC_TOKENS=$(ls __backup/tokens.css.bak-* 2>/dev/null | sort | tail -n1)

[ -z "$SRC_INDEX" ] && { echo "no __backup/index.astro.bak-* found"; exit 1; }
[ -z "$SRC_LAYOUT" ] && { echo "no __backup/SiteLayout.astro.bak-* found"; exit 1; }
[ -z "$SRC_TOKENS" ] && { echo "no __backup/tokens.css.bak-* found"; exit 1; }

if [ -f src/pages/index.astro ]; then cp -a src/pages/index.astro ".restore_backups/src/pages/index.astro.$TS.current"; fi
if [ -f src/layouts/SiteLayout.astro ]; then cp -a src/layouts/SiteLayout.astro ".restore_backups/src/layouts/SiteLayout.astro.$TS.current"; fi
if [ -f src/styles/tokens.css ]; then cp -a src/styles/tokens.css ".restore_backups/src/styles/tokens.css.$TS.current"; fi

cp -a "$SRC_INDEX" src/pages/index.astro
cp -a "$SRC_LAYOUT" src/layouts/SiteLayout.astro
cp -a "$SRC_TOKENS" src/styles/tokens.css

node - <<'JS'
const fs=require('fs')
function patchIndex(p){
  let s=fs.readFileSync(p,'utf8')
  s=s.replace(/from "\.\.\/components\/ui\/TrustBar\.astro";?/,'from "../components/ui/TrustBar.astro"')
  s=s.replace(/from "\.\.\/components\/ui\/Button\.astro";?/,'from "../components/ui/Button.astro"')
  s=s.replace(/from "\.\.\/components\/ui\/SectionHeader\.astro";?/,'from "../components/ui/SectionHeader.astro"')
  s=s.replace(/from "\.\.\/components\/ui\/Card\.astro";?/,'from "../components/ui/Card.astro"')
  fs.writeFileSync(p,s)
}
function patchLayout(p){
  let s=fs.readFileSync(p,'utf8')
  if(!/^---\n/.test(s)) s='---\n---\n'+s
  if(!/import Header from "\.\.\/components\/Header\.astro"/.test(s)) s=s.replace(/^---\n/,'---\nimport Header from "../components/Header.astro"\n')
  if(!/import Footer from "\.\.\/components\/Footer\.astro"/.test(s)) s=s.replace(/^---\n/,'---\nimport Footer from "../components/Footer.astro"\n')
  if(!/import "\.\.\/styles\/global\.css"/.test(s)) s=s.replace(/^---\n/,'---\nimport "../styles/global.css"\n')
  if(!/fonts\.googleapis\.com\/css2\?family=Inter/.test(s)){
    s=s.replace(/<head>/i,'<head>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">')
  }
  s=s.replace(/<body([^>]*)>/i,(m,attrs)=>`<body${attrs}>\n  <Header />`)
  if(!/<Footer\b/.test(s)) s=s.replace(/<\/body>\s*<\/html>\s*$/i,'  <Footer />\n</body>\n</html>')
  fs.writeFileSync(p,s)
}
patchIndex('src/pages/index.astro')
patchLayout('src/layouts/SiteLayout.astro')
JS

if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
