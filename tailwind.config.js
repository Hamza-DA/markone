const { Spacing } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      myBlack: '#100F10',
      myWhite: '#F9F9FB',
      myRed: '#FD5052',
    },
    scale: {
      40: '.40',
    },
    fontSize: {
      xs: '.64rem',
      sm: '.8rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2.441rem',
      xl2: '3.052rem',
      Display1: '9.313rem',
      Display2: '7.451rem',
      Display3: '5.96rem',
      Display4: '4.768rem',
      Display5: '3.815rem',
      Displayxl: '22.737rem',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      px3: '3px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
