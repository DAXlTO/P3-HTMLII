/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'red', 
        'secondary': '#0d6efd',
        'secondary-link': '#7cb7fd' 
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

