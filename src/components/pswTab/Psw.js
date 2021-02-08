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

import Profile from './Profile'
import Documents from './Documents'

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
}));

const Psw = ({ psw }) => {
  const classes = useStyles();
  const { user, documents, skills, profile } = psw.pswProfile;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const tabsArr = [
    { label: "Profile", component:<Profile profile={profile} skills={skills}/> },
    { label: "Documentation", component: <Documents documents={documents}/> },
    { label: "Availibily", component: "" },
    { label: "Bookings", component: "" },
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
      >
        <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
      </ListItem>

      <Dialog
        fullScreen
        open={open}
        scroll="body"
        onClose={() => {
          setOpen(false);
        }}
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
          <Box>
            {tabsArr.map((tab, index)=>{
              if(index==value){
                return tab.component
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
