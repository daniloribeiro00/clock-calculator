/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '380px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  plugins: [],
};
