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
      animation: {
        'bounce-slow': 'bounceslow 0.5s ease-in-out infinite',
      },
      keyframes: {
        bounceslow: {
          "0%, 100%": {transform: "translateX(0px)"}, 
          "50%": {transform: "translateX(-1px)"},
        },
      },
      boxShadow: {
        'special-before': 'inset 0 0 5px black',
        'special': '0px 0px 10px 1000px rgba(0,0,0, 0.5)',
      },
    },
  },
  plugins: [],
}
