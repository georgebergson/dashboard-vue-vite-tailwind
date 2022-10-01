/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors:{
        'primary':'#0ae820',
        'primary-dark':'#1f1f1f',
        'fundo':'#F1F5F9',
        'cinza-escuro': '#1f1f1f',
        'verde': '#0ae820',
        'verde-escuro': '#00bc0f'
      }
    },
   
  },
  plugins: [],
}
