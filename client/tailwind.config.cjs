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
        'hero-login': "url('https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2Finitial%2Fdmitrii-vaccinium-ByUAo3RpA6c-unsplash%201.png?alt=media&token=c0241468-f459-4940-8b45-e058d7e2558f')",
        'football': "url('./src/assets/img/football.png')",
        'footballResponsive': "url('./src/assets/img/football_responsive.png')",
        'hero-register': "url('https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2Finitial%2Fregister-image.png?alt=media&token=2197aa52-0b42-4e96-b67f-bf909e15f6e8')",
      }
    },
  },
  plugins: [],
}
