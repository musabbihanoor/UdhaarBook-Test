/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A6DE1",
        "text-primary": "#181818",
        red: "#E52823",
        white: "#ffffff",
        grey: "#9A9A9A",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
