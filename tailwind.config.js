/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["winter", "night", 
    {
      night: {
        ...require("daisyui/src/theming/themes")["night"],
        primary: "#EAE4CF",
        secondary: "teal",
      },
    },],
    darkTheme: "night"
  },
  theme: {
    colors: {
      'feldgrau': '#3C5142',
      'ash-grey': '#C8DCD3',
      'coral-pink': '#DA9081',
      'eggshell': '#EAE4CF',
      'light-white': '#fafafa',
      'light-text': '#334F69',
      'dark-text': '#0E172A'
    },
  },
  plugins: [require("daisyui")],
};
