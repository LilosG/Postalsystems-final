#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

ROOT=$(pwd)
PAGES=$(rg -n --glob 'src/pages/**/*.{astro,md,mdx}' '^' | wc -l | tr -d ' ')
echo "pages_total=$PAGES"

echo "check_meta_and_h1"
node - <<'JS'
const fs=require('fs');const path=require('path');const globs=require('glob');
function read(p){try{return fs.readFileSync(p,'utf8')}catch{return ''}}
const files=globs.sync('src/pages/**/*.{astro,md,mdx}',{nodir:true});
let missTitle=[],missDesc=[],missH1=[],missCanon=[];
for(const f of files){
  const s=read(f);
  const hasHeadComp=/\<Head\b/.test(s)||/meta name="description"/.test(s);
  const hasTitle=/\<title\>/.test(s)||/title=/.test(s)||/\bpageTitle\b/.test(s);
  const hasDesc=/name="description"/.test(s)||/description=/.test(s);
  const hasH1=/\<h1\b/.test(s);
  const hasCanon=/rel="canonical"/.test(s)||/canonical=/.test(s);
  if(!hasTitle) missTitle.push(f);
  if(!hasDesc) missDesc.push(f);
  if(!hasH1) missH1.push(f);
  if(!hasCanon) missCanon.push(f);
}
function out(k,arr){console.log(k+':'+(arr.length?(' '+arr.length+' issue(s)'): ' ok')); if(arr.length) console.log(arr.slice(0,20).join('\n'))}
out('missing_title',missTitle);
out('missing_meta_description',missDesc);
out('missing_h1',missH1);
out('missing_canonical',missCanon);
JS

echo "check_routes_and_generated"
npx astro build >/dev/null 2>&1 || true
rg -n "page\\(s\\) built" .astro | tail -n 1 | sed 's/.* \([0-9]\+\) page(s) built.*/generated_pages=\1/'

echo "check_robots_sitemap"
test -f public/robots.txt && echo "robots=public/robots.txt" || echo "robots=missing"
rg -n --glob 'src/pages/**/*' 'sitemap' || true
test -f dist/sitemap.xml && echo "sitemap=dist/sitemap.xml" || echo "sitemap=will-generate-on-build"

echo "check_duplicate_service_routes"
rg -n --glob 'src/pages/services/**/*' '\[slug\]|\[service\]' || true
