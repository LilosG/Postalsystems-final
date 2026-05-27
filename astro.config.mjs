import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://sandiegocommercialmailboxes.com",
  output: "server",
  adapter: vercel({ mode: "serverless" }),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({ filter: (page) => typeof page === "string" && !page.endsWith("/thank-you/") }),
  ],
});
