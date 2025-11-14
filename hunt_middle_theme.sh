#!/usr/bin/env bash
set -euo pipefail

cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

# Strings that only appear in the MIDDLE screenshot
read -r -d '' PHRASES <<'TXT'
Warranty & Support
Ready to upgrade?
Request Quote →
HOAs & Property Managers
Apartments & Multi-family
Builders & General Contractors
Commercial & Industrial Parks
Campus & Municipal
We manage approvals & inspections
Secure tenant access
USPS sign-off
TXT

# Files most likely to contain the homepage UI
FILES=(
  src/pages/index.astro
  src/components
  src/layouts
  src/styles
)

# pick matcher: rg if present, else grep -F
if command -v rg >/dev/null 2>&1; then
  MATCHER='rg -n -F --pcre2 -q'
else
  MATCHER='grep -n -F -q'
fi

CANDIDATES=$(git rev-list --all -- "${FILES[@]}")

printf "commit\tdate\tscore\thits\tsubject\n" > middle_theme_candidates.tsv

for c in $CANDIDATES; do
  SNAP=$(mktemp)
  for f in "${FILES[@]}"; do
    git show "$c:$f" 2>/dev/null >> "$SNAP" || true
  done
  # nothing at this commit for those paths
  if [ ! -s "$SNAP" ]; then rm -f "$SNAP"; continue; fi

  score=0; hits=0
  while IFS= read -r p; do
    [ -z "$p" ] && continue
    if $MATCHER "$p" "$SNAP"; then
      score=$((score+1)); hits=$((hits+1))
    fi
  done <<< "$PHRASES"

  subj=$(git log -1 --pretty=%s "$c")
  date=$(git log -1 --date=short --pretty=%ad "$c")
  printf "%s\t%s\t%02d\t%02d\t%s\n" "$(git rev-parse --short "$c")" "$date" "$score" "$hits" "$subj" >> middle_theme_candidates.tsv
  rm -f "$SNAP"
done

(sort -k3,3nr -k2,2r middle_theme_candidates.tsv | uniq) > middle_theme_ranked.tsv
column -t -s $'\t' middle_theme_ranked.tsv | sed -n '1,40p'
echo
echo "Top candidate (hash only):"
awk 'NR==2{print $1}' middle_theme_ranked.tsv
