/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['inter', 'sans-serif'] 
      },
       gradientColors: {
        dark: ['#1E293B', '#0F172A'],   // Dark mode gradient colors
        light: ['#FFFFFF', '#E5E7EB'], // Light mode gradient colors
      },
    },
  },
  plugins: [
    
  ],
}