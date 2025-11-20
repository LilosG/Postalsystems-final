#!/usr/bin/env bash
set -euo pipefail

ID="G-5CZDMQYTL8"

echo ">> Searching for G-5CZDMQYTL8 in source files (excluding dist/)..."

MATCHES=$(grep -rl "G-5CZDMQYTL8" . \
  --exclude-dir=node_modules \
  --exclude-dir=dist \
  --exclude-dir=.git || true)

if [ -z "$MATCHES" ]; then
  echo ">> No G-5CZDMQYTL8 found outside dist/. Nothing to replace."
else
  echo ">> Found these files:"
  echo "$MATCHES"
  echo
  echo ">> Replacing G-5CZDMQYTL8 with $ID ..."

  echo "$MATCHES" | while IFS= read -r file; do
    [ -z "$file" ] && continue
    echo "Updating $file"
    perl -pi -e "s/G-5CZDMQYTL8/$ID/g" "$file"
  done
fi

echo
echo ">> Git status after edits:"
git status

echo ">> Adding modified tracked files..."
git add -u

echo ">> Committing..."
git commit -m "Use real GA4 measurement id $ID" || echo "No changes to commit."

echo ">> Pushing..."
git push

echo ">> Done."
