/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white":"#FFFFFF",
        // "blue":"#0000FF",
        // "red":"#FF0000",
        // "green":"#008000",
        // "grey":"#DCDCDC"
      }
    },
  },
  plugins: [],
}

