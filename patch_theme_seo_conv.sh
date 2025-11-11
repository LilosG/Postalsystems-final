#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/styles src/components/ui src/lib

if [ -f "_archive/__pre_restore/tokens.css" ]; then
  mkdir -p src/styles
  cp "_archive/__pre_restore/tokens.css" "src/styles/tokens-legacy.css"
fi

cat > src/styles/theme.css <<'CSS'
:root {
  --ps-color-primary: #0a59c7;
  --ps-color-primary-600: #0a59c7;
  --ps-color-primary-700: #094eab;
  --ps-color-accent: #113b8f;
  --ps-color-text: #0f172a;
  --ps-color-muted: #475569;
  --ps-radius: 16px;
  --ps-shadow: 0 8px 20px rgba(2,6,23,.08);
}
@media (prefers-color-scheme: dark) {
  :root { --ps-color-text:#e5e7eb; --ps-color-muted:#94a3b8; }
}
CSS

if ! grep -q 'theme.css' src/styles/global.css 2>/dev/null; then
  mkdir -p src/styles
  printf "@import './theme.css';\n" | cat - src/styles/global.css 2>/dev/null > src/styles/global.tmp || printf "@import './theme.css';\n" > src/styles/global.tmp
  mv src/styles/global.tmp src/styles/global.css
fi

cat > tailwind.config.mjs <<'JS'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "var(--ps-color-primary-600)",
          700: "var(--ps-color-primary-700)"
        },
        accent: { 600: "var(--ps-color-accent)" }
      },
      borderRadius: { '2xl': "var(--ps-radius)" },
      boxShadow: { ps: "var(--ps-shadow)" }
    }
  },
  plugins: []
}
JS

cat > src/components/ui/CTA.astro <<'ASTRO'
---
interface Props { title?: string; sub?: string; primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string }
const { title="Get a USPS-approved quote", sub="Fast, compliant installs with inspection sign-off.", primaryHref="/contact#quote", primaryLabel="Get a Quote", secondaryHref="tel:16194614787", secondaryLabel="Call (619) 461-4787" } = Astro.props as Props
---
<section class="rounded-2xl p-6 shadow-ps border border-gray-200 bg-white">
  <h2 class="text-2xl font-bold text-gray-900">{title}</h2>
  <p class="text-gray-600 mt-1">{sub}</p>
  <div class="mt-4 flex flex-col sm:flex-row gap-3">
    <a href={primaryHref} class="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium bg-primary-600 text-white hover:bg-primary-700">{primaryLabel}</a>
    {secondaryHref && <a href={secondaryHref} class="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium border border-primary-600 text-primary-600 hover:bg-blue-50">{secondaryLabel}</a>}
  </div>
</section>
ASTRO

cat > src/components/Head.astro <<'ASTRO'
---
interface Props {
  title?: string
  description?: string
  canonical?: string
  image?: string
}
const site = "https://postalsystemspro.com"
const { title="Postal Systems — Commercial Mailbox Installation in San Diego", description="USPS-approved commercial mailbox installation, replacements, parcel lockers, and 4C/CBU systems. Serving San Diego County with inspection sign-off.", canonical=Astro.url?.href ?? site, image=`${site}/og.jpg` } = Astro.props as Props
---
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical} />
<meta property="og:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
ASTRO

cat > src/layouts/SiteLayout.astro <<'ASTRO'
---
interface Alert { text: string; href?: string }
interface Props { title?: string; description?: string; canonical?: string; alert?: Alert | null }
const { title, description, canonical, alert=null } = Astro.props as Props
import Head from "../components/Head.astro"
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Head {title} {description} canonical={canonical} />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </head>
  <body class="min-h-screen bg-white text-gray-900">
    {alert && (<a href={alert.href ?? "#"} class="block w-full text-center text-[13px] bg-primary-600 text-white py-2">{alert.text}</a>)}
    <slot />
  </body>
</html>
ASTRO

mkdir -p public
cat > public/robots.txt <<'TXT'
User-agent: *
Allow: /
Sitemap: https://postalsystemspro.com/sitemap-index.xml
TXT

if ! grep -q '@astrojs/sitemap' package.json; then
  npm pkg set devDependencies.@astrojs/sitemap="^3.1.3" >/dev/null
  node -e "let f=require('fs');let c=f.readFileSync('astro.config.mjs','utf8');if(!c.includes('@astrojs/sitemap')){c=c.replace(/integrations:\s*\[/,'integrations: [sitemap(), ');c='import sitemap from \"@astrojs/sitemap\"\\n'+c;};f.writeFileSync('astro.config.mjs',c)"
fi

npx astro build || true

