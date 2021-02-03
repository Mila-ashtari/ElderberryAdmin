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
      h2:{
        fontSize:"1.5rem"
      },
      h1:{
        fontSize:"1rem"
      }
  },
});


export default theme