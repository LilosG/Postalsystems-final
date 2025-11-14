#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

node - <<'JS'
const fs=require('fs'), path=require('path')

const site='https://postalsystemspro.com'
const files=[
  {p:'src/pages/projects.astro', href: site+'/projects/'},
  {p:'src/pages/contact.astro', href: site+'/contact/'},
  {p:'src/pages/about.astro', href: site+'/about/'},
  {p:'src/pages/_debug-assets.astro', href: site+'/_debug-assets/'},
  {p:'src/pages/blog/index.astro', href: site+'/blog/'},
  {p:'src/pages/blog/[post].astro', href: '{Astro.url.href}', dynamic:true}
]

function read(f){try{return fs.readFileSync(f,'utf8')}catch{return null}}
function write(f,s){fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s)}

function ensureCanonicalTag(src, href){
  if(/\brel=["']canonical["']/.test(src)) return src
  if(/<head[^>]*>/.test(src)){
    return src.replace(/<head([^>]*)>/i, `<head$1>\n    <link rel="canonical" href=${href}>`)
  }
  if(/<\/html>/i.test(src)){
    return src.replace(/<html([^>]*)>/i, `<html$1>\n<head>\n  <link rel="canonical" href=${href}>\n</head>`)
  }
  return `<head>\n  <link rel="canonical" href=${href}>\n</head>\n`+src
}

for(const f of files){
  const s=read(f.p)
  if(!s) continue
  let out=s
  const href = f.dynamic ? '{Astro.url.href}' : `"${f.href}"`
  out = ensureCanonicalTag(out, href)
  if(out!==s) write(f.p,out)
}
JS

npx astro build >/dev/null || true
