import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PswRoutes from './pswContent/PswRoutes'
import '../normalize.css'
import Psw from "./pswContent/Psw";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <PswRoutes/> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
