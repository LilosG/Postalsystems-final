#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

SITEURL="https://postalsystemspro.com/"

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
if(!fs.existsSync(p)) process.exit(0)
let s=fs.readFileSync(p,'utf8')

const hasSiteLayoutTag=/<SiteLayout\b/i.test(s)
const hasImport=/import\s+SiteLayout\s+from\s+["']\.\.\/layouts\/SiteLayout\.astro["']/.test(s)
const hasFront=/^---\s*[\s\S]*?---\s*/.test(s)

if(hasSiteLayoutTag && !hasImport){
  if(hasFront){
    s=s.replace(/^---\s*/,`---\nimport SiteLayout from "../layouts/SiteLayout.astro"\n`)
  }else{
    s=`---\nimport SiteLayout from "../layouts/SiteLayout.astro"\n---\n`+s
  }
}

if(hasSiteLayoutTag){
  if(!/canonical=/.test(s)){
    s=s.replace(/<SiteLayout\b/i,`<SiteLayout canonical="https://postalsystemspro.com/" `)
  }
}

fs.writeFileSync(p,s)
JS

npx astro build
./structure_audit.sh
