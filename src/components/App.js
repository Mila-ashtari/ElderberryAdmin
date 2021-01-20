import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
