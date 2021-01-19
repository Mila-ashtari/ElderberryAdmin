import React, { Fragment } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from './theme'
import Login from './components/Login'
function App() {
  return (
      <ThemeProvider theme={theme}> 
        <BrowserRouter>
        <Route path="/" exact component={Login} />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
