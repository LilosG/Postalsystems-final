#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

if [ -d src/pages/service-area ]; then mkdir -p _archive; tar -czf _archive/service-area_dup.tar.gz -C src/pages service-area; rm -rf src/pages/service-area; fi

if [ -f src/pages/sitemap.xml.ts ]; then mkdir -p _archive; mv src/pages/sitemap.xml.ts _archive/sitemap.xml.ts; fi

if [ -f pnpm-lock.yaml ]; then PM=pnpm; corepack enable >/dev/null 2>&1 || true; $PM add -D @astrojs/sitemap
elif [ -f yarn.lock ]; then PM=yarn; corepack enable >/dev/null 2>&1 || true; $PM add -D @astrojs/sitemap
else PM=npm; $PM i -D @astrojs/sitemap; fi

node - <<'JS'
const fs=require('fs');
let s=fs.readFileSync('astro.config.mjs','utf8');
if(!/from "astro\/config"/.test(s)) s=`import { defineConfig } from "astro/config"\n`+s;
if(!/from "@astrojs\/sitemap"/.test(s)) s=`import sitemap from "@astrojs/sitemap"\n`+s;
if(!/export default defineConfig\(/.test(s)) s+=`\nexport default defineConfig({})\n`;
s=s.replace(/export default defineConfig\(\{([\s\S]*?)\}\)/,(_,inner)=>{
  if(!/site:/.test(inner)) inner=`site: "https://postalsystemspro.com", `+inner;
  if(!/integrations:\s*\[/.test(inner)) inner=`integrations: [sitemap()], `+inner;
  if(!/sitemap\(\)/.test(inner)) inner=inner.replace(/integrations:\s*\[/,`integrations: [sitemap(), `);
  if(!/redirects:/.test(inner)) inner=`redirects: { "/service-area/:path*": "/service-areas/:path*" }, `+inner;
  return `export default defineConfig({ ${inner} })`;
});
fs.writeFileSync('astro.config.mjs',s);
JS

npx astro build
