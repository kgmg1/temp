/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*.html", "./assets/js/*.js"],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '384px',
      'xs': '512px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'dark-blue': '#003159',
        'primary-blue': '#005d98',
        'light-blue': '#298cc8',
        'grayscale-white': '#fefefe',
        'grayscale-black': '#2e2b2a',
        'grayscale-gray': '#ced3e1',
        'grayscale-light-gray': '#eef4fc',
        'grayscale-dark-gray': '#606e76',
        'secondary-gold': '#e7ad4c'
      }
    },
  },
  plugins: [],
}

