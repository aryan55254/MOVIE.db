/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  fontFamily: {
      bebas: ['"Bebas Neue"', 'cursive'], // For bold cinematic fonts
      montserrat: ['"Montserrat"', 'sans-serif'], // For clean modern fonts
    },
    },
  },
  plugins: [],
};

