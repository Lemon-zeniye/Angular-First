/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'kanit':  ['Kanit', 'sans-serif'],
        'Labrada' : ['Labrada', 'serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'Roboto' : ['Roboto', 'sans-serif'],
        'Rubik' : ['Rubik', 'sans-serif']

      },
    },
  },
  plugins: [],
}