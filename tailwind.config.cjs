/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "1.5rem" },
      screens: { "2xl": "var(--container-max)" }
    },
    extend: {
      colors: {
        brand: {
          50:"var(--brand-50)",100:"var(--brand-100)",200:"var(--brand-200)",
          300:"var(--brand-300)",400:"var(--brand-400)",500:"var(--brand-500)",
          600:"var(--brand-600)",700:"var(--brand-700)",800:"var(--brand-800)",900:"var(--brand-900)"
        },
        accent:{600:"var(--accent-600)"},
        bg:"var(--bg)", surface:"var(--surface)", muted:"var(--muted)", border:"var(--border)", ring:"var(--ring)"
      },
      borderRadius:{ sm:"var(--r-sm)", md:"var(--r-md)", lg:"var(--r-lg)", xl:"var(--r-xl)", "2xl":"24px" },
      boxShadow:{ sm:"var(--shadow-sm)", md:"var(--shadow-md)", lg:"var(--shadow-lg)",
        focus:"0 0 0 3px color-mix(in oklab, var(--brand-600) 25%, transparent)" },
      transitionTimingFunction:{ out:"var(--ease-out)" },
      transitionDuration:{ hover:"200ms", enter:"300ms" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")({ strategy:"class" })]
}
