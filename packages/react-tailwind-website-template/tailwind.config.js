module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{scss,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
      },
      colors: {},
      gridTemplateColumns: {},
      height: {},
      width: {},
    },
  },
  variants: {
    extend: { },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
