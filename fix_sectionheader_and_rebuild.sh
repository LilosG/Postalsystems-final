#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/components/ui

# Minimal, flexible SectionHeader
cat > src/components/ui/SectionHeader.astro <<'ASTRO'
---
interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
}
const { title, subtitle = '', eyebrow = '', align = 'left' } = Astro.props as Props
const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
---
<div class={`flex flex-col ${alignCls} gap-2`}>
  {eyebrow && <div class="text-xs uppercase tracking-wider text-primary-700">{eyebrow}</div>}
  <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
  {subtitle && <p class="text-gray-600 max-w-prose">{subtitle}</p>}
  <slot />
</div>
ASTRO

# Auto-import SectionHeader wherever it's used
node - <<'JS'
const fs = require('fs')
const glob = require('glob')
const files = glob.sync('src/pages/**/*.{astro,md,mdx}')
for (const p of files) {
  let s = fs.readFileSync(p, 'utf8')
  if (!/<SectionHeader\b/.test(s)) continue

  const hasFront = /^---\s*[\s\S]*?---\s*/.test(s)
  const hasImport = /import\s+SectionHeader\s+from\s+["'][^"']*components\/ui\/SectionHeader\.astro["']/.test(s)

  if (!hasImport) {
    const depth = p.split('/').length
    const up = depth <= 3 ? '..' : Array(depth - 2).fill('..').join('/')
    const importLine = `import SectionHeader from "${up}/components/ui/SectionHeader.astro"`

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
