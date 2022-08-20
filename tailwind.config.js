/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#202A25",
        second: "#5F4BB6",
        third: "#86A5D9",
        fourth: "#26F0F1",
        fifth: "#C4EBC8",
      },
    },
  },
  plugins: [],
}
