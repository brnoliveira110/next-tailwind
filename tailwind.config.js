/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        app: 'minmax(18rem, 20rem) 1fr'
      },
      colors: {
        diego: "#8257e6",
      },
    },
  },
  plugins: [],
};
