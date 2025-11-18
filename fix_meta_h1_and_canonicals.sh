#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

node - <<'JS'
const fs=require('fs'), path=require('path')

const site='https://sandiegocommercialmailboxes.com'
const targets=[
  {file:'src/pages/about.astro',        route:'/about/',        h1:'About Postal Systems',               title:'About — Postal Systems'},
  {file:'src/pages/contact.astro',      route:'/contact/',      h1:'Contact Postal Systems',             title:'Contact — Postal Systems'},
  {file:'src/pages/projects.astro',     route:'/projects/',     h1:'Projects',                           title:'Projects — Postal Systems'},
  {file:'src/pages/blog/index.astro',   route:'/blog/',         h1:'Blog',                               title:'Blog — Postal Systems'},
  {file:'src/pages/_debug-assets.astro',route:'/_debug-assets/',h1:null,                                  title:null},
  {file:'src/pages/blog/[post].astro',  route:null,             h1:null,                                  title:null, dynamic:true}
]

function r(p){try{return fs.readFileSync(p,'utf8')}catch{return null}}
function w(p,s){fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s)}

function ensureCanonical(src, canonicalExpr){
  if(/\bcanonical=/.test(src)) return src
  if(/<SiteLayout\b[^>]*\/>/.test(src)){
    return src.replace(/<SiteLayout\b([^>]*)\/>/, `<SiteLayout$1 canonical=${canonicalExpr} />`)
  }
  if(/<SiteLayout\b/.test(src)){
    return src.replace(/<SiteLayout\b([^>]*)>/, `<SiteLayout$1 canonical=${canonicalExpr}>`)
  }
  return src
}

function ensureTitle(src, titleText){
  if(!titleText) return src
  if(/<title>/.test(src)) return src
  if(/<SiteLayout\b/.test(src)){
    if(/\btitle=/.test(src)) return src
    return src.replace(/<SiteLayout\b([^>]*)/, `<SiteLayout$1 title="${titleText}"`)
  }
  return src
}

function ensureH1(src, h1Text){
  if(!h1Text) return src
  if(/<h1\b/i.test(src)) return src
  if(/<main\b[^>]*>/.test(src)){
    return src.replace(/<main\b([^>]*)>/i, `<main$1>\n      <h1 class="text-3xl font-bold tracking-tight">${h1Text}</h1>`)
  }
  if(/<body\b[^>]*>/.test(src)){
    return src.replace(/<body\b([^>]*)>/i, `<body$1>\n    <h1 class="text-3xl font-bold tracking-tight">${h1Text}</h1>`)
  }
  return src + `\n<h1 class="text-3xl font-bold tracking-tight">${h1Text}</h1>\n`
}

for(const t of targets){
  const p=t.file, s=r(p)
  if(!s) continue
  let out=s

  if(t.dynamic){
    out = ensureCanonical(out, `{Astro.url.href}`)
  }else{
    const canon=`"${site}${t.route.replace(/\/+$/,'')}/"`
    out = ensureCanonical(out, canon)
  }

  out = ensureTitle(out, t.title)
  out = ensureH1(out, t.h1)

  if(out!==s) w(p,out)
}

JS

npx astro build >/dev/null || true

node - <<'JS'
const fs=require('fs'),cp=require('child_process')
if(!fs.existsSync('reports')) fs.mkdirSync('reports')
try{cp.execSync('npx linkinator http://localhost:5050 --recurse --skip "mailto:,tel:" --format json',{stdio:'ignore'})}catch{}
JS
