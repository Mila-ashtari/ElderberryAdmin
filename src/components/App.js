import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Login from "./Login";
import Dashboard from "./Dashboard";
import '../normalize.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
