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
    width:'50%'
  },
  profileImage: {
    width:'150px',
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
        <Typography variant='h2'>Info</Typography>
        <Typography>{`Gender: ${profile[0].gender}`}</Typography>
        <Typography>{`Good with pets: ${profile[0].petPreference}`}</Typography>
        <Typography>{`About: ${profile[0].aboutYourSelf}`}</Typography>
      </CardContent>
      <CardContent>
      <Typography variant='h2'>Skills</Typography>

      </CardContent>
    </Card>
  );
}

export default Profile;
