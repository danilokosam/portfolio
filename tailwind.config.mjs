/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "mobile-xs": { min:"376px", max:"425px" },
        "mobile-xxs": { min: "320px", max: "375px" },
      },
    },
  },
  plugins: [],
};
