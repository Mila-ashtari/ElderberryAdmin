import React, { useState } from "react";
import { Tabs, Tab, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link } from "react-router-dom";

import requiredAuth from "./requiredAuth";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
  },
  tabs: {
    borderRight: "solid 1px black",
  },
  tab: {
      color:'white',
      backgroundColor: theme.palette.primary.main
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const tabs = [
    { label: "psw", component: "" },
    { label: "client", component: "" },
    { label: "costumer", component: "" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.dashboard} container spacing={3}>
      <Grid item sm={4}>
        <Tabs
          className={classes.tabs}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          indicatorColor="secondary"
        >
          {tabs.map((tab, index) => (
            <Tab
              className={classes.tab}
              key={index}
              label={tab.label}
              component={Link}
              to={`/dashboard/${tab.label}`}
              classes={{root: classes.root}}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item className={classes.tabsContainer} sm={8}>
        <Switch>
          {tabs.map((tab, index) => (
            <Route
              key={index}
              path={`/dashboard/${tab.label}`}
              exact
              component={() => <p>{tab.label}</p>}
            />
          ))}
        </Switch>
      </Grid>
    </Grid>
  );
}

export default requiredAuth(Dashboard);
