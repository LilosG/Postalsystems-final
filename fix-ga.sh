#!/usr/bin/env bash
set -euo pipefail

find dist/client -name "*.html" -print0 | while IFS= read -r -d '' file; do
  perl -pi -e "s#gtag\\('config', G-5CZDMQYTL8, { send_page_view: true }\\);#gtag('config', 'G-5CZDMQYTL8', { send_page_view: true });#" "$file"
done
