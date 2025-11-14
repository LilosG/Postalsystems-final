#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
TS=$(date +%s)

mkdir -p .restore_backups/src/layouts .restore_backups/src/styles

[ -f src/layouts/BaseLayout.astro ] && cp -a src/layouts/BaseLayout.astro ".restore_backups/src/layouts/BaseLayout.astro.$TS.current" || true
[ -f src/layouts/SiteLayout.astro ] && cp -a src/layouts/SiteLayout.astro ".restore_backups/src/layouts/SiteLayout.astro.$TS.current" || true
[ -f src/styles/global.css ] && cp -a src/styles/global.css ".restore_backups/src/styles/global.css.$TS.current" || true
[ -f src/styles/tokens.css ] && cp -a src/styles/tokens.css ".restore_backups/src/styles/tokens.css.$TS.current" || true
[ -f tailwind.config.mjs ] && cp -a tailwind.config.mjs ".restore_backups/tailwind.config.mjs.$TS.current" || true

git checkout recover-oct-theme -- \
  src/layouts/BaseLayout.astro \
  src/layouts/SiteLayout.astro \
  src/styles/global.css \
  src/styles/tokens.css \
  tailwind.config.mjs

node - <<'JS'
const fs=require('fs')
function patchBaseLayout(p){
  if(!fs.existsSync(p)) return
  let s=fs.readFileSync(p,'utf8')
  if(!/^---\n/.test(s)) s='---\n---\n'+s
  if(!/from "\.\.\/styles\/global\.css"/.test(s)) s=s.replace(/^---\n/,'---\nimport "../styles/global.css"\n')
  if(!/fonts\.googleapis\.com\/css2\?family=Inter/.test(s)){
    s=s.replace(/<head>/i,'<head>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">')
  }
  if(!/lang="/.test(s)) s=s.replace(/<html([^>]*)>/,'<html$1 lang="en">')
  fs.writeFileSync(p,s)
}
function patchSiteLayout(p){
  if(!fs.existsSync(p)) return
  let s=fs.readFileSync(p,'utf8')
  if(!/^---\n/.test(s)) s='---\n---\n'+s
  if(!/from "\.\.\/components\/Header\.astro"/.test(s)) s=s.replace(/^---\n/,'---\nimport Header from "../components/Header.astro"\n')
  if(!/from "\.\.\/components\/Footer\.astro"/.test(s)) s=s.replace(/^---\n/,'---\nimport Footer from "../components/Footer.astro"\n')
  if(!/<Header\b/.test(s)) s=s.replace(/<body[^>]*>/i,(m)=>m+'\n  <Header />')
  if(!/<Footer\b/.test(s)) s=s.replace(/<\/body>\s*<\/html>\s*$/i,'  <Footer />\n</body>\n</html>')
  fs.writeFileSync(p,s)
}
patchBaseLayout('src/layouts/BaseLayout.astro')
patchSiteLayout('src/layouts/SiteLayout.astro')
JS

if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
