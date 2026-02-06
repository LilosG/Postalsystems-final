/// <reference types="astro/client" />
/// <reference types="vite/client" />

/// <reference path="./astro.d.ts" />

interface ImportMeta {
  readonly glob: (pattern: string, options?: { eager?: boolean }) => Record<string, () => Promise<unknown>>
}
