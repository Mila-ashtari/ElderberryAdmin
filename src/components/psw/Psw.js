import React, { Fragment, useState } from "react";
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

import Profile from "./Profile";
import Documents from "./Documents";
import Bookings from "./Bookings";
import Availability from "./Availability";
import { getPsw } from "../../actions/psw";
// import Schedule from "./Schedule"

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "space-between",
  },
  pswContainer: {
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

const Psw = (props) => {
  console.log("psw")
  const classes = useStyles();
  const { psw, getPsw } = props;
  const { user, skills, profile, schedule, currentBookings, id } = props.psw;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const tabsArr = [
    {
      label: "Profile",
      component: <Profile profile={profile} skills={skills} />,
    },
    { label: "Documentation", component: <Documents psw={psw} /> },
    // { label: "Schedule", component: <Schedule {...{schedule, currentBookings}}/> },
    { label: "Availability", component: <Availability schedule={schedule} /> },
    { label: "Bookings", component: <Bookings /> },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    getPsw(user, id);
    setOpen(true)
  };

  return (
    <Fragment>
      <Dialog
        fullScreen
        open={open}
        scroll="body"
        onClose={() => {
          setOpen(false);
        }}
        classes={{ paper: classes.paper }}
      >
        <DialogTitle disableTypography>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item>
              <Typography variant="h2">{`${user.firstName} ${user.lastName}`}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Email: {user.email}</Typography>
            </Grid>
            <Grid item>
              <Button>
                <CloseIcon
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
      <Divider />
    </Fragment>
  );
};

export default connect(null, { getPsw })(Psw);
