/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
