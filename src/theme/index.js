import {createMuiTheme} from  '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0AAE69"
    },
    secondary: {
      main: "rgb(248, 239, 239);"
    },
  },
  typography: {
    fontFamily:
      '"akagi-pro", serif',
  },
});


export default theme