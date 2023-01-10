/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', "sans-serif"]
      }, 
      maxWidth:{
        "T":"800px"
      },
      margin:{
        "40-auto":"40px auto"
      },
      colors: {
        's-white': '#f1f1f1',
        "ffefef": "#ffefef"
      },
    },
  },
  plugins: [],
}
