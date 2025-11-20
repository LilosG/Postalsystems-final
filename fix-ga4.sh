#!/usr/bin/env bash
set -euo pipefail

ID="G-5CZDMQYTL8"

# Replace the placeholder G-5CZDMQYTL8 in any GA4 config line in dist
rg -l "gtag\\('config', G-5CZDMQYTL8" dist | while read -r f; do
  perl -pi -e "s/gtag\\('config', G-5CZDMQYTL8/gtag('config', '$ID'/" "\$f"
done
