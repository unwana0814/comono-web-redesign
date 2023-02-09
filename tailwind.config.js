/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
        keyframes:
      {
        'trans-right': {
          '0%' : {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        },

        'trans-left': {
          '0%' : {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'}
        },

        'trans-bottom': {
          '0%' : {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'}
        },

        'trans-top': {
          '0%' : {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },

        'left': {
          '0%, 100%' : {transform: 'translateX(-10px) rotate(12deg)'},
          '50%': {transform: 'translateX(0)'}
        },

        'right': {
          '0%, 100%' : {transform: 'translateX(10px)'},
          '50%': {transform: 'translateX(0)'}
        },

          'scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(-250px * 14))' },
          },

          'scroll-in': {
            '0%': { transform: 'translateX(calc(-250px * 14))'},
            '100%': { transform: 'translateX(0)'},
          },
      },

      animation: {
        'trans-right' : 'trans-right 1.5s ease-in-out',
        'trans-left' : 'trans-left 1.5s ease-in-out',
        'trans-top' : 'trans-top 1.5s ease-in-out',
        'trans-bottom' : 'trans-bottom 1.5s ease-in-out',
        'left' : 'right 1.5s ease-in-out',
        'right' : 'left 1.5s ease-in-out',
        'scroll': 'scroll 40s linear infinite',
        'scroll-in': 'scroll-in 40s linear infinite',
      },
    },
  },
  plugins: [],
}
