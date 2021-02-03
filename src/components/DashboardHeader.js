import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { logOut } from "../actions";
import smith from "../images/christineSmith.png";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    color: "white",
    padding: "15px",
  },
  gridItem: {
    alignSelf: "center",
  },
  logo: {
    width: "70px",
  },
  title: {
    alignSelf: "center",
    marginLeft: "15px",
  },
}));

function DashboardHeader(props) {
  const { logOut, history } = props;
  const classes = useStyles();
  const handleClick = () => {
    logOut();
    history.push("/");
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container spacing={2}>
          <Grid container Item xs={8} className={classes.gridItem}>
            <CardMedia
              component="img"
              alt="elderberry logo"
              image={logo}
              className={classes.logo}
            />
            <Typography variant="h1" className={classes.title}>
              Elderberry Administrative Site
            </Typography>
          </Grid>

          <Grid item xs={2} className={classes.gridItem}>
            <Typography>Christine Smith</Typography>
          </Grid>
          <Grid item xs={2} className={classes.gridItem}>
            <Button color="inherit" onClick={handleClick}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default connect(null, { logOut })(DashboardHeader);
