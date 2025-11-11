#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

DESC='USPS-approved commercial mailbox installation, parcel lockers, and repairs for San Diego County.'

node - <<'JS'
const fs=require('fs');const p='src/pages/index.astro';
if(!fs.existsSync(p)) process.exit(0);
let s=fs.readFileSync(p,'utf8');
if(/name="description"/i.test(s)){ fs.writeFileSync(p,s); process.exit(0); }

function injectMetaIntoHead(src){
  if(/<\/head>/.test(src)){
    return src.replace(/<\/head>/i,`  <meta name="description" content="${process.env.DESC}"/>\n</head>`);
  }
  return src;
}

if(/<SiteLayout\b/i.test(s)){
  if(!/description=/.test(s)){
    s=s.replace(/<SiteLayout\b/i,`<SiteLayout description="${process.env.DESC}" `);
    fs.writeFileSync(p,s); process.exit(0);
  }else{
    s=s.replace(/description="[^"]*"/,`description="${process.env.DESC}"`);
    fs.writeFileSync(p,s); process.exit(0);
  }
}

if(/<Head\b/i.test(s)){
  s=injectMetaIntoHead(s);
  fs.writeFileSync(p,s); process.exit(0);
}

if(/<head\b/i.test(s)){
  s=injectMetaIntoHead(s);
  fs.writeFileSync(p,s); process.exit(0);
}

s = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="description" content="${process.env.DESC}"/>
  </head>
  <body>
${s}
  </body>
</html>
`;
fs.writeFileSync(p,s);
JS
DESC="$DESC" npx astro build
./structure_audit.sh
