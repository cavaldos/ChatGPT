/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  mode: "jit",

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "light-white": "#ffffff2b",
        "dark-grey": "#202123",
        "light-grey": "#353740",
      },
    },
  },
  plugins: [require("daisyui")],
};
