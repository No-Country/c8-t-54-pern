/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        'hero-login': "url('./src/assets/img/dmitrii-vaccinium-ByUAo3RpA6c-unsplash 1.png')",
        'football': "url('./src/assets/img/football.png')",
        'footballResponsive': "url('./src/assets/img/football_responsive.png')",
        'hero-register': "url('./src/assets/img/register-image.avif')",
      }
    },
  },
  plugins: [],
}
