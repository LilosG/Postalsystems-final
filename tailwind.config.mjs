import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ps-navy": "#012169",
        "ps-red": "#DA291C",
        "ps-surface": "#F4F6FB",
        "ps-muted": "#E0E4EE",
      },
      boxShadow: {
        ps: "0 18px 40px rgba(1, 33, 105, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
