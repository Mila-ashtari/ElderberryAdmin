import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Grid,
  Tab,
  Tabs,
  Button,
  Box,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import { getCustomer } from "../../actions/customer";
import Profile from "./Profile";
import Clients from "./Clients";

// import Schedule from "./Schedule"

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "20px",
  },
  customerContainer: {
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
  paper: {},
}));

const Customer = (props) => {
  const classes = useStyles();
  const {
    customer: { user, clients, history },
    getCustomer,
  } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  console.log("rendered");
  const tabsArr = [
    {
      label: "Profile",
      component: <Profile user={user}/>,
    },
    { label: "Clients", component: <Clients clients={clients} /> },
    { label: "Bookings", component: "" },
  ];

  useEffect(() => {
    getCustomer(props.match.params.id);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item>
          <Typography variant="h2">{`${user.firstName} ${user.lastName}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Email: {user.email}</Typography>
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
        {tabsArr.map((tab, index) => (
          <Tab className={classes.tab} key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box style={{ padding: "30px" }}>
        {tabsArr.map((tab, index) => {
          if (index === value) {
            return tab.component;
          }
        })}
      </Box>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { customer: state.customers[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getCustomer })(Customer);
