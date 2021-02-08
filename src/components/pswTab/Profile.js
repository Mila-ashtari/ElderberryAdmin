import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  flexContainer:{
    display:'flex'
  },
  profileImage: {
    width:'200px',
    alignSelf:'flex-start'
  },
}));
function Profile({ profile, skills }) {
  const classes = useStyles();
  return (
    <Card className={classes.flexContainer}>
      <CardMedia
      className={classes.profileImage}
        component="img"
        src={`profile[0].profileImage`}
        title="profile image"
      ></CardMedia>
      <CardContent>
        <Typography>{`Gender: ${profile[0].gender}`}</Typography>
        <Typography>{`Good with pets: ${profile[0].petPreference}`}</Typography>
        <Typography>{`About: ${profile[0].aboutYourSelf}`}</Typography>
      </CardContent>
    </Card>
  );
}

export default Profile;
