#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
git rev-parse --is-inside-work-tree >/dev/null
ROOT="$(git rev-parse --show-toplevel)"
mkdir -p "$ROOT/reports"
REPORT="$ROOT/reports/theme_verify.tsv"
TMPROOT="$ROOT/.tmp_theme_verify"
:> "$REPORT"
echo -e "ref\tscore\tmatches\tmissing" >> "$REPORT"
REFS="${REFS:-recover-oct-theme 57cc7bd 830607a theme-usps-blue-20251111-132131}"

score_ref () {
  REF="$1"
  DEST="${TMPROOT}-${REF//\//_}"
  rm -rf "$DEST" || true
  if git show -s "$REF" >/dev/null 2>&1; then
    git worktree add "$DEST" "$REF" >/dev/null 2>&1 || git worktree add -f "$DEST" "$REF" >/dev/null 2>&1
  else
    return
  fi
  cd "$DEST"

  FILES=("src/pages/index.astro" "src/components/sections/HeroSection.astro" "src/layouts/SiteLayout.astro" "src/styles/global.css" "src/styles/tailwind.css" "src/styles/tokens.css" "src/components/ui/TrustBar.astro")
  CONTENT=""
  for f in "${FILES[@]}"; do
    if [ -f "$f" ]; then
      CONTENT="$CONTENT
$(printf "\n=== %s ===\n" "$f")
$(sed -n '1,300p' "$f")"
    fi
  done

  MATCH=0
  MISS=()
  want () { echo "$CONTENT" | rg -n -F "$1" >/dev/null 2>&1; }
  needles=("Mailbox Installation, Done Right."
           "Core Services"
           "Featured Projects"
           "What Clients Say"
           "Service Areas"
           "Get a Quote"
           "USPS-Approved Installer"
           "rounded-2xl"
           "shadow-card"
           "border border-gray-200"
           "TrustBar"
           "StatsStrip"
           "SectionHeader"
           "Inter"
           "px-5 py-3"
           "rounded-full"
           "bg-primary-600"
           "hover:bg-primary-700")
  for n in "${needles[@]}"; do
    if want "$n"; then MATCH=$((MATCH+1)); else MISS+=("$n"); fi
  done
  COLORS=("0B4DA2" "083A79" "primary-600" "primary-700")
  COLORHIT=0
  for c in "${COLORS[@]}"; do
    if echo "$CONTENT" | rg -n "$c" >/dev/null 2>&1; then COLORHIT=$((COLORHIT+1)); fi
  done
  MATCH=$((MATCH+COLORHIT))

  echo -e "${REF}\t${MATCH}\t${MATCH}\t${#MISS[@]}" >> "$REPORT"

  cd - >/dev/null
  git worktree remove "$DEST" --force >/dev/null 2>&1 || true
  rm -rf "$DEST" || true
}

for r in $REFS; do score_ref "$r"; done
column -t -s $'\t' "$REPORT"
