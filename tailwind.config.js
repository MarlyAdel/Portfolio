/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          md:"3rem",
          lg:"4rem"
        },
      },
      fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
       robotoSlab: ['"Roboto Slab"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        rocket: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        rocket: 'rocket 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      
   
    },
  },
  plugins: [],
}

