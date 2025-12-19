import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://sandiegocommercialmailboxes.com",
  output: "server",
  adapter: vercel({ mode: "serverless" }),
  integrations: [sitemap({
      filter: (page) => typeof page === "string" && !page.endsWith("/thank-you/"),
    })],
});
