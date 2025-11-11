import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({ redirects: { "/service-area/:path*": "/service-areas/:path*" }, 
  site: "https://postalsystemspro.com",
  integrations: [sitemap(), tailwind()],
 });
