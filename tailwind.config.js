/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        'main': '#000000',
      },
      screens: {
        '3xl': '2000px',
      }
    },
  },
  plugins: [],
}