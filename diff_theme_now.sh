#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
REF="recover-oct-theme"
FILES="
tailwind.config.mjs
tailwind.config.cjs
tailwind.config.js
src/styles/base.css
src/styles/global.css
src/styles/tailwind.css
src/styles/tokens.css
src/layouts/Base.astro
src/layouts/BaseLayout.astro
src/layouts/MarketingPage.astro
src/layouts/SiteLayout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/PromoBanner.astro
src/components/TrustBadges.astro
src/components/ui
src/components/sections
"
git diff --name-status "$REF" -- $FILES
