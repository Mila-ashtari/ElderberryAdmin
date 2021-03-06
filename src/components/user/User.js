import React, { useState, Fragment } from "react";
import {
  Typography,
  Grid,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import history from "../../history"

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "20px",
  },
  CustomerList: {
    padding: "30px",
  },
  tabs: {
    backgroundColor: "rgba(131, 125, 125, 0.671)",
    justifyContent: "center",
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  flexContainer: {
    display: "flex",
  },
  id: {
    width: "20%",
    margin: "0px 20px",
  },
  firstName: {
    width: "10%",
    margin: "0px 20px",
  },
  lastName: {
    width: "10%",
    margin: "0px 20px",
  },
}));

function User({firstName, lastName, email, tabs}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item>
          <Typography variant="h2">{`${firstName} ${lastName}`}</Typography>
        </Grid>
        <Grid item>
          {email !==undefined && <Typography variant="body1">Email: {email}</Typography>}
        </Grid>
      </Grid>

      <Tabs
        className={classes.tabs}
        aria-label="tabs"
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        classes={{ indicator: classes.indicator }}
      >
        {tabs.map((tab, index) => (
          <Tab className={classes.tab} key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box style={{ padding: "30px" }}>
        {tabs.map((tab, index) => {
          if (index === value) {
            return <Fragment key={index}>{tab.component}</Fragment>;
          }
        })}
      </Box>
    </>
  );
}

export default User
