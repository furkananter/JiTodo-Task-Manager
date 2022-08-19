/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#2f74c0",
      },
    },
  },
  plugins: [],
}
