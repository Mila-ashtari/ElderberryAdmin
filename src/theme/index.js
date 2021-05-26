import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0AAE69",
    },
    secondary: {
      main: "#0aae6a3d",
    },
  },
  typography: {
    fontFamily: '"akagi-pro", serif',
    h2: {
      fontSize: "1.3rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
    h1: {
      fontSize: "1.7rem",
    },
  },
  overrides: {
    MuiFormControl: {
      root:{
        display:"block"
      }
    },
  },
});

export default theme;
