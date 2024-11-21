/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "menu-mobile",
    "menu-mobile.active", // Safelist dynamic classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
