import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Info from './Info'

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
  },
  profileImage: {
    width: "150px",
    alignSelf: "flex-start",
  },
}));
function Profile({ profile, skills }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.flexContainer}>
          <CardMedia
            className={classes.profileImage}
            component="img"
            src={profile.profileImage}
            title="profile image"
          ></CardMedia>
          <CardContent>
            <Typography variant="h2">Info</Typography>
            <Info profile={profile}/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h2">Skills</Typography>
            <Typography variant="h3">Certification and Licenses</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Profile;
