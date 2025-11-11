#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

DESC='USPS-approved commercial mailbox installation, parcel lockers, and repairs for San Diego County.'

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
if(!fs.existsSync(p)) process.exit(0)
let s=fs.readFileSync(p,'utf8')
if(/^---[\s\S]*?---\s*/.test(s)) s=s.replace(/^---[\s\S]*?---\s*/,'')
fs.writeFileSync(p,s)
JS

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
if(!fs.existsSync(p)) process.exit(0)
let s=fs.readFileSync(p,'utf8')
const desc=process.env.DESC

function ensureDescription(src){
  if(/name="description"/i.test(src)) return src
  if(/<SiteLayout\b/i.test(src)){
    if(/description=/.test(src)) return src.replace(/description="[^"]*"/,`description="${desc}"`)
    return src.replace(/<SiteLayout\b/i,`<SiteLayout description="${desc}" `)
  }
  if(/<head\b/i.test(src)) return src.replace(/<\/head>/i,`  <meta name="description" content="${desc}"/>\n</head>`)
  return `<!doctype html>
<html lang="en">
  <head>
    <meta name="description" content="${desc}"/>
  </head>
  <body>
${src}
  </body>
</html>
`
}
s=ensureDescription(s)
fs.writeFileSync(p,s)
JS

npx astro build
./structure_audit.sh
