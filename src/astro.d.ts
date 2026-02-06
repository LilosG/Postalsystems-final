/// <reference types="astro/client" />

interface AstroGlobal {
  site: URL | undefined
  generator: string
  props: Record<string, unknown>
  canonicalURL: URL
  cookies: {
    get(name: string): { value: string | undefined }
    set(name: string, value: string, options?: Record<string, unknown>): void
    delete(name: string): void
  }
  request: {
    url: string
    method: string
    headers: Headers
    params: Record<string, string>
    query: URLSearchParams
  }
  response: {
    headers: Headers
    status: number
    statusText: string
  }
  redirect(path: string, status?: number): Response
}

declare const Astro: AstroGlobal
