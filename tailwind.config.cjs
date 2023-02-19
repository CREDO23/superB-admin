/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'rose' : '#AC1E59',
        'rose-5' : '#FBBAE4',
        'white' : '#FDF9F0',
        'black' : '#2D1825'
      }
    },
  },
  plugins: [],
}
