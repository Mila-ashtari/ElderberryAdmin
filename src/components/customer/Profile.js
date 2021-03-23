import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: "none",
    display: "block",
  },
}));
function Profile({ user }) {
  const classes = useStyles();
  const {
    address: { addressLineOne, postalCode, province, city },
    contactNumber,
  } = user;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h2" className={classes.h2}>
              Address:
            </Typography>
            <Typography variant="body1">{`${addressLineOne}, ${postalCode},`}</Typography>
            <Typography variant="body1">{` ${province}, ${city}`}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h2" className={classes.h2}>
              Contact Phone Number:
            </Typography>
            <Typography variant="body1">{`${contactNumber}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Profile;
