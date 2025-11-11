#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/components/ui

# Minimal, flexible Card component
cat > src/components/ui/Card.astro <<'ASTRO'
---
interface Props {
  title: string
  href?: string
  description?: string
  eyebrow?: string
}
const { title, href = '', description = '', eyebrow = '' } = Astro.props as Props
const Wrapper = href ? 'a' : 'div'
const wrapperAttrs = href ? { href } : {}
---
<Wrapper {...wrapperAttrs} class="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-600">
  {eyebrow && <div class="text-xs uppercase tracking-wider text-primary-700 mb-1">{eyebrow}</div>}
  <h3 class="text-lg font-semibold tracking-tight">{title}</h3>
  {description && <p class="mt-2 text-sm text-gray-600">{description}</p>}
  <slot />
</Wrapper>
ASTRO

# Auto-import Card wherever it's referenced
node - <<'JS'
const fs = require('fs')
const glob = require('glob')
const files = glob.sync('src/pages/**/*.{astro,md,mdx}')
for (const p of files) {
  let s = fs.readFileSync(p, 'utf8')
  if (!/<Card\b/.test(s)) continue

  const hasFront = /^---\s*[\s\S]*?---\s*/.test(s)
  const hasImport = /import\s+Card\s+from\s+["'][^"']*components\/ui\/Card\.astro["']/.test(s)

  if (!hasImport) {
    const depth = p.split('/').length
    const up = depth <= 3 ? '..' : Array(depth - 2).fill('..').join('/')
    const importLine = `import Card from "${up}/components/ui/Card.astro"`
    if (hasFront) {
      s = s.replace(/^---\s*/, m => `${m}${importLine}\n`)
    } else {
      s = `---\n${importLine}\n---\n` + s
    }
    fs.writeFileSync(p, s)
  }
}
JS

npx astro build
./structure_audit.sh
