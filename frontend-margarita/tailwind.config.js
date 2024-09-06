/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    backgroundImage: {
      'custom-bg-1': "url('img/fondoDeLoginRegister.svg')",
      'custom-bg-2': "url('img/fondoLandingPage.svg')",
    }
  },
  },
  plugins: [],
  };