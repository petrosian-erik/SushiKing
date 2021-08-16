module.exports = {
  purge: ['./app/index.html', './app/js/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      s: '320px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1460px',
      xxl: '1920px'
    },
    colors: {
      primary: '#EF532C',
      accent: '#F18F20',
      black: '#000000',
      gray: '#0000004d',
      'gray-light': '#0000001a',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      body: '#E5E5E5'
    }),
    fontFamily: {
      lato: ['Lato'],
      oswald: ['Oswald'],
      sans: ['Source Sans Pro']
    },
    textColor: theme => ({
      ...theme('colors'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
