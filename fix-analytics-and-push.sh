#!/usr/bin/env bash
set -euo pipefail

ID="G-5CZDMQYTL8"

echo ">> Rewriting src/components/Analytics.astro with correct GA4 snippet..."

cat <<'ASTRO' > src/components/Analytics.astro
---
const GA_MEASUREMENT_ID = 'G-5CZDMQYTL8';
---

<!-- Google tag (gtag.js) -->
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });
</script>
ASTRO

echo ">> New Analytics.astro (top 40 lines):"
sed -n '1,40p' src/components/Analytics.astro

echo ">> Git status:"
git status

echo ">> Committing Analytics.astro..."
git add src/components/Analytics.astro
git commit -m "Fix GA Analytics component with real ID $ID" || echo "No changes to commit."

echo ">> Pushing..."
git push

echo ">> Done."
