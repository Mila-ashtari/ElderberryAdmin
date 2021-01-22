import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { logOut } from "../actions";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  userContainer: {
    display: "flex",
    "& p": {
      alignSelf: "center",
      marginLeft: "10px",
    },
  },
}));

function DashboardHeader(props) {
const { logOut, history } = props;
  const classes = useStyles();
  const handleClick=()=>{
      logOut()
      history.push('/')
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Box className={classes.userContainer}>
          <Avatar alt="" src="" />
          <Typography>user</Typography>
        </Box>
        <Button color="inherit" onClick={handleClick}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default connect(null, { logOut })(DashboardHeader);
