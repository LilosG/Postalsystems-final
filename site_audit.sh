#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
echo "pages_total=$(rg -n --glob 'src/pages/**/*.{astro,md,mdx}' '^' | wc -l | tr -d ' ')"
node - <<'JS'
const fs=require('fs');const glob=require('glob');function r(p){try{return fs.readFileSync(p,'utf8')}catch{return''}}
const files=glob.sync('src/pages/**/*.{astro,md,mdx}',{nodir:true})
let missTitle=[],missDesc=[],missH1=[],missCanon=[]
for(const f of files){
  const s=r(f)
  const hasTitle=/<title>/.test(s)||/title=/.test(s)
  const hasDesc=/name="description"/.test(s)||/description=/.test(s)
  const hasH1=/<h1\b/i.test(s)
  const hasCanon=/rel="canonical"/.test(s)||/canonical=/.test(s)
  if(!hasTitle) missTitle.push(f)
  if(!hasDesc) missDesc.push(f)
  if(!hasH1) missH1.push(f)
  if(!hasCanon) missCanon.push(f)
}
function out(k,a){console.log(k+':'+(a.length?(' '+a.length+' issue(s)'):' ok')); if(a.length) console.log(a.slice(0,30).join('\n'))}
out('missing_title',missTitle)
out('missing_meta_description',missDesc)
out('missing_h1',missH1)
out('missing_canonical',missCanon)
JS
echo "route_conflicts"
rg -n --glob 'src/pages/**/*' '\[slug\]|\[service\]|\[city\]' || true
echo "sitemap_robots"
test -f public/robots.txt && echo "robots=ok" || echo "robots=missing"
test -f dist/sitemap-index.xml && echo "sitemap=ok" || echo "sitemap=missing_or_custom"
echo "service-area_links"
rg -n --glob 'src/pages/**/*' '/service-area/' || true
if [ -f reports/lighthouse.json ]; then
  echo "lighthouse_scores"
  jq -r '.categories | "Performance: \(.performance.score*100|floor)\nAccessibility: \(.accessibility.score*100|floor)\nBest Practices: \(.["best-practices"].score*100|floor)\nSEO: \(.seo.score*100|floor)"' reports/lighthouse.json || true
fi
