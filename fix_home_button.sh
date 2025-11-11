#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
if(!fs.existsSync(p)) process.exit(0)
let s=fs.readFileSync(p,'utf8')
s=s.replace(/<Button\b([^>]*)>([\s\S]*?)<\/Button>/gi, (_m,attrs,inner) => {
  const href=/href=['"][^'"]+['"]/.test(attrs)?attrs.match(/href=['"]([^'"]+)['"]/)[1]:"/contact/#quote"
  return `<a href="${href}" class="inline-flex items-center rounded-full bg-primary-600 px-5 py-3 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600">${inner.trim()}</a>`
})
fs.writeFileSync(p,s)
JS

npx astro build
./structure_audit.sh
