/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "#8F1C26 ",
        "dark-yellow": "#BF8A12",
        "basic-red": "#E52823",
        white: "#EFEFEF",
        "light-red": "#F9B8B9",
        "light-yellow": "#FEE6B0",
        "basic-yellow": "#FFB718",
        "light-grey": "#D0D9E1",
        "light-blue": "#F0F5FA",
        "dark-grey": "#32343E",
        "medium-grey": "#646982",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      gotham: ["Gotham", "sans-serif"],
      "gotham-light": ["GothamLight", "sans-serif"],
      "gotham-medium": ["GothamMedium", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
