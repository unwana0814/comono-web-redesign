/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      transition: {
        'left': 'scale-x'
    },
    },
  },
  plugins: [],
}
