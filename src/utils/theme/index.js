import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A6DE1",
      faded: "#CCDEF8",
    },
    secondary: {
      main: "#32343E",
    },
  },
  typography: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
  },
});

export default theme;
