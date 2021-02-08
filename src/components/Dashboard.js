import React, { Fragment, useState } from "react";
import { Tabs, Tab, Grid, TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Switch, Route, Link } from "react-router-dom";

import requiredAuth from "./requiredAuth";
import DashboardHeader from "./DashboardHeader";
import PswContainer from "./tabs/PswContainer";

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
    { label: "psw", component: PswContainer },
    { label: "client", component: "" },
    { label: "customer", component: "" },
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
                (index === value + 1 && "-5px 0px 7px rgba(37, 36, 36, 0.945)") ||
                (index === value - 1 && "5px 0px 7px rgba(80, 77, 77, 0.658)"),
            }}
          />
        ))}
      </Tabs>

      {/* <Grid item xs={4} className={classes.searchBar}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Grid> */}

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
