/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},fontFamily: {
      gilroy: ['Gilroy-SemiBold', 'sans-serif'],
      gilroyMed: ['Gilroy-Medium', 'sans-serif'],
      gilroy_italic: ['Gilroy-Italic', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
   
  ],
}