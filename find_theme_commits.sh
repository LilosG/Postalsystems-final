#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p reports
git rev-parse --is-inside-work-tree >/dev/null

printf "scanning working tree\n" | tee reports/theme_scan.txt
rg -n --hidden --glob '!node_modules' -e 'Mailbox Installation, Done Right' -e 'USPS-Approved' -e 'Core Services' -e 'Get a Quote' -e 'rounded-2xl' -e 'shadow-card' -e 'hero-blue' -e 'container-main' -e '#0B4DA2' -e 'Inter' -e 'TrustBar' -e 'StickyCTA' | tee -a reports/theme_scan.txt || true

printf "\nrecent edits to layout/styles\n" | tee -a reports/theme_scan.txt
git log --date=iso --pretty=format:'%h %ad %s' -- src/layouts/SiteLayout.astro src/styles src/components | head -n 40 | tee -a reports/theme_scan.txt

printf "\ncommits with blue palette or theme tokens\n" | tee -a reports/theme_scan.txt
git log -G '#0B4DA2|primary-dark|hero-blue|rounded-2xl|shadow-card|container-main|Inter' --pretty=format:'%h %ad %s' --date=iso -- src | tee -a reports/theme_scan.txt

printf "\ncommits that changed tailwind config\n" | tee -a reports/theme_scan.txt
git log --date=iso --pretty=format:'%h %ad %s' -- tailwind.config.* | tee -a reports/theme_scan.txt

printf "\nlast 20 commits that touched SiteLayout or theme.css\n" | tee -a reports/theme_scan.txt
git log --date=iso --pretty=format:'%h %ad %s' -n 20 -- src/layouts/SiteLayout.astro src/styles/theme.css | tee -a reports/theme_scan.txt

printf "\nshowing diffs for top candidate commits\n" | tee -a reports/theme_scan.txt
CANDS=$(git log -G '#0B4DA2|hero-blue|rounded-2xl|shadow-card|container-main|Inter' --pretty=format:'%h' -- src | head -n 5)
for c in $CANDS; do
  echo "---- $c ----" | tee -a reports/theme_scan.txt
  git show --name-only --oneline $c | tee -a reports/theme_scan.txt
done

printf "\nchecking stashes and branches\n" | tee -a reports/theme_scan.txt
git stash list | tee -a reports/theme_scan.txt || true
git branch -a | tee -a reports/theme_scan.txt || true

echo "done. see reports/theme_scan.txt"
