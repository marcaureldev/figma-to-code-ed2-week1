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
    fontFamily: {
      "raleway": ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        'gray': '#484D56',
        'gray-50': '#E8E9EA',
        'gray-800': '#0E1218',
      },

      backgroundImage: {
        'profile': "url('/images/nft_profile.svg')",
      },
      width: {
        '9': '9em',
        '25': '25em',
        '28': '28em',
        '35': '35em',
        '30': '30em',
        '35': '35em',
      },
      maxWidth: {
        '15': '15em',
        '17': '17em',
        '30': '30em',
        '70': '70em',
      },
      height: {
        '20': '20em',
      }
    },
  },
  plugins: [],
}