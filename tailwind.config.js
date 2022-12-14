/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#2F4B26",
        second: "#3E885B",
        third: "#85BDA6",
        fourth: "#BEDCFE",
        fifth: "#C0D7BB",
      },
      animation: {
        'bounce-slow': 'bounceslow 0.5s ease-in-out infinite',
          wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      keyframes: {
        bounceslow: {
          "0%, 100%": {transform: "translateX(0px)"}, 
          "50%": {transform: "translateX(-1px)"},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        }
      },
      boxShadow: {
        'special-before': 'inset 0 0 5px white',
        'special-before-dark': 'inset 0 0 1px white',
        'button-before': 'inset -0px -1px 0px black',
        'special': '0px 0px 10px 1000px rgba(0,0,0, 0.5)',
      },
      
    },
  },
  plugins: [],
}
