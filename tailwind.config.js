/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily:{
      "raleway" : ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        'gray': '#484D56',
        'gray-50': '#E8E9EA',
        'gray-800': '#0E1218',
      },
      width: {
        '25': '25em',
        '28': '28em',
        '35': '35em',
        '30': '30em',
        '35': '35em',
      },
      maxWidth: {
        '30': '30em',
        '70': '70em',
      }
    },
  },
  plugins: [],
}