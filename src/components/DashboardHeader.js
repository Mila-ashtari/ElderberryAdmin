import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  CardMedia,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { logOut } from "../actions";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    color: "white",
    padding: "10px 15px",
  },
  gridContainer: {
    justifyContent: "space-between",
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
  menuIcon: {
    color: "white",
  },
}));

function DashboardHeader(props) {
  const { logOut, history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    logOut();
    history.push("/");
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid container item xs={8} className={classes.gridItem}>
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

          <Grid item xs={2} className={classes.gridItem} style={{textAlign:'center'}}>
            <Button
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon className={classes.menuIcon} />
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>Christine Smith</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default connect(null, { logOut })(DashboardHeader);
