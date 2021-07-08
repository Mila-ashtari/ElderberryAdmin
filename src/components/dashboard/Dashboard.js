import React, { Fragment, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link } from "react-router-dom";

import requiredAuth from "../requiredAuth";
import DashboardHeader from "./DashboardHeader";
import ProviderList from "./ProviderList";
import CustomerList from "./CustomerList";
import ClientList from "./ClientList";
import BookingList from "./BookingList";

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderBottom: "black solid 2px",
  },
  tab: {
    maxWidth: "100%",
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  searchBar: {
    alignSelf: "center",
  },
}));

function Dashboard(props) {
  const { history } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const tabs = [
    { label: "provider", component: ProviderList },
    { label: "client", component: ClientList },
    { label: "customer", component: CustomerList },
    //
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <DashboardHeader history={history} />

      <Tabs
        variant="fullWidth"
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.indicator }}
      >
        {tabs.map((tab, index) => (
          <Tab
            className={classes.tab}
            key={index}
            label={tab.label}
            component={Link}
            to={`/dashboard/${tab.label}`}
            style={{
              backgroundColor: index === value && "rgba(131, 125, 125, 0.219)",
              boxShadow:
                index === value + 1 && "-5px 0px 7px rgba(80, 77, 77, 0.932)",
              borderLeft: index === value && ".5px solid black",
            }}
          />
        ))}
      </Tabs>

      <Switch>
        {tabs.map((tab, index) => (
          <Route
            key={index}
            path={`/dashboard/${tab.label}`}
            component={tab.component}
          />
        ))}
      </Switch>
    </Fragment>
  );
}

export default requiredAuth(Dashboard);
