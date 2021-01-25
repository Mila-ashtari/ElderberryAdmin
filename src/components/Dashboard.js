import React, { Fragment, useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link } from "react-router-dom";

import requiredAuth from "./requiredAuth";
import DashboardHeader from "./DashboardHeader";

const useStyles = makeStyles((theme) => ({
dashboardContainer:{
    height:'100%'
},
  tabs: {
    borderRight: "solid 1px black",
  },
  tab: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

function Dashboard(props) {
const {history}=props
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const tabs = [
    { label: "psw", component: "" },
    { label: "client", component: "" },
    { label: "customer", component: "" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <DashboardHeader history={history}/>
      <Grid className={classes.dashboardContainer} container spacing={3}>
        <Grid item sm={3}>
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
                classes={{ root: classes.root }}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item className={classes.tabsContainer} sm={9}>
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
    </Fragment>
  );
}

export default requiredAuth(Dashboard);
