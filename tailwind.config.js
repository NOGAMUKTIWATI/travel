/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: "'Lemon', serif",
        quicksand: "'Quicksand', serif",
      },
      colors: {
        primaryColor: "#03262D",
        secondaryColor: "#B54637",
      },
    },
  },
  plugins: [],
};
