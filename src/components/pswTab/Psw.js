import React, { Fragment, useState } from "react";
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

const Psw = ({ psw, key }) => {
  const classes = useStyles();
  console.log(psw)
  const { user, documents, skills, profile } = psw
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const tabsArr = [
    {
      label: "Profile",
      component: <Profile profile={profile} skills={skills} />,
    },
    { label: "Documentation", component: <Documents documents={documents} /> },
    { label: "Availibily", component: "" },
    { label: "Bookings", component: <Bookings/>},
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => setOpen(true)}
        // style={{ backgroundColor: key % 2 !== 0 && "#e4e2e2" }}
      >
        <ListItemText className={classes.flexContainer} disableTypography>
          <Typography className={classes.id}>ID</Typography>
          <Typography className={classes.lastName}>{user.lastName}</Typography>
          <Typography className={classes.firstName}>
            {user.firstName}
          </Typography>
        </ListItemText>
      </ListItem>

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
              if (index == value) {
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

export default Psw;
