/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "var(--ps-color-primary-600)",
          700: "var(--ps-color-primary-700)"
        },
        accent: { 600: "var(--ps-color-accent)" }
      },
      borderRadius: { '2xl': "var(--ps-radius)" },
      boxShadow: { ps: "var(--ps-shadow)" }
    }
  },
  plugins: []
}
