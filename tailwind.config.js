/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A6DE1",
        "text-primary": "#181818",
        "dark-red": "#8F1C26 ",
        "dark-yellow": "#BF8A12",
        "basic-red": "#E52823",
        white: "#ffffff",
        "light-red": "#F9B8B9",
        "light-yellow": "#FEE6B0",
        "basic-yellow": "#FFB718",
        "light-grey": "#f8f8f8",
        "light-blue": "#F0F5FA",
        "dark-grey": "#32343E",
        grey: "#9A9A9A",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
