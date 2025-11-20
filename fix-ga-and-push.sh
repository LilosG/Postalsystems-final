#!/usr/bin/env bash
set -euo pipefail

ID="G-5CZDMQYTL8"

echo ">> Fixing GA measurement ID in dist/client HTML files..."

find dist/client -name "*.html" -print0 | while IFS= read -r -d '' file; do
  perl -pi -e "s#gtag\\('config', G-5CZDMQYTL8, { send_page_view: true }\\);#gtag('config', '$ID', { send_page_view: true });#" "$file"
done

echo ">> Git status before commit:"
git status

echo ">> Adding files and committing..."
git add dist/client
git commit -m "Fix GA4 measurement ID usage" || echo "No changes to commit."

echo ">> Pushing to origin..."
git push

echo ">> Done."
