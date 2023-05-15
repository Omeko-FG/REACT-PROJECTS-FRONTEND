/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    extend: {
      colors: {
        "gray-dark-main": "#233142",
        "gray-dark-second": "#455d7a",
        "gray-light": "#e3e3e3",
        "red-main": "#f95959",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin")],
};
