import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Login from "./Login";
import Psw from "./psw/Psw";
import Customer from "./customer/Customer";
import Client from "./client/Client";
import Booking from "./booking/Booking";
import Dashboard from "./dashboard/Dashboard";
import "../normalize.css";
import history from "../history";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/psw/:id" component={Psw}></Route>
        <Route path="/customer/:id" component={Customer}></Route>
        <Route path="/client/:id" component={Client}></Route>
        <Route path="/booking/:id" component={Booking}></Route>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
