/** Tailwind config normalized for Astro */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}",
    "./public/**/*.html",
  ],
  theme: { extend: {
        colors: {
          postal: {
            blue: "#0E377B",   // deep USPS blue (primary backgrounds)
            navy: "#0B2C63",   // darker strip/hero band
            sky:  "#EAF2FF",   // light panels/cards
            red:  "#D62E2E",   // accent CTA
            gray: "#F5F7FB"    // section backgrounds
          }
        },} },
  plugins: [],
};
