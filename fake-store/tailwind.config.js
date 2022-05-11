module.exports = {
  content: ['./src/**/*.{html,tsx}', './index.html'],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'go-dark': {
          '0%': {
            backgroundColor: 'rgb(100 116 139 / 0)',
          },
          '100%': {
            backgroundColor: 'rgb(100 116 139 / 0.25)',
          },
        },
        'go-light': {
          '0%': {
            backgroundColor: 'rgb(100 116 139 / 0.25)',
          },
          '100%': {
            backgroundColor: 'rgb(100 116 139 / 0)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left ease-in-out 1 both',
        'slide-out-left': 'slide-out-left ease-in-out 1 both',
        'slide-in-right': 'slide-in-right ease-in-out 1 both',
        'slide-out-right': 'slide-out-right ease-in-out 1 both',
        'go-dark': 'go-dark ease-in-out 1 both',
        'go-light': 'go-light ease-in-out 1 both',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  variants: {
    extends: {
      textColor: ['is-active'],
    },
  },
};
