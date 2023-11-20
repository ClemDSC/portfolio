/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'feldgrau': '#3C5142',
      'ash-grey': '#C8DCD3',
      'coral-pink': '#DA9081',
      'eggshell': '#EAE4CF',
    },
    fontFamily: {
      sans: ["Hind Madurai"],
    },
    extend: {
      backgroundImage: {
        'hero': "url('https://img.freepik.com/free-vector/halftone-background-abstract-black-white-dots-shape_314614-1558.jpg?w=2000')",
        'dot': "url('https://t3.ftcdn.net/jpg/01/95/57/18/360_F_195571898_kOkmUbWk9zpgCDijGtYqbX2unD5oziBa.jpg')",
      },
    },
  },
  plugins: [],
};
