import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel"

export default defineConfig({
  site: "https://sandiegocommercialmailboxes.com",
  output: "server",
  adapter: vercel({ mode: "serverless" }),
  integrations: [sitemap()],
})
