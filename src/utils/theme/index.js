// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EFEFEF",
    },
    secondary: {
      main: "#32343E",
    },
    // Custom Colors
    darkRed: "#8F1C26",
    darkYellow: "#BF8A12",
    basicRed: "#E52823",
    white: "#EFEFEF",
    lightRed: "#F9B8B9",
    lightYellow: "#FEE6B0",
    basicYellow: "#FFB718",
    lightGrey: "#D0D9E1",
    lightBlue: "#F0F5FA",
    darkGrey: "#32343E",
    mediumGrey: "#646982",
  },
  typography: {
    fontFamily: {
      gotham: ["Gotham", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
});

export default theme;
