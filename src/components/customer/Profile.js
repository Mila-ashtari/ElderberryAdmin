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
  p: {
    display: "block",
    marginBottom: "none",
  },
}));
function Profile({ user }) {
  const classes = useStyles();
  const {
    address: { addressLineOne, postalCode, province, city },
  } = user;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h2" className={classes.h2}>
              Address
            </Typography>
            <Typography
              variant="paragraph"
              className={classes.p}
            >{`${addressLineOne}, ${postalCode},`}</Typography>
            <Typography
              variant="paragraph"
              className={classes.p}
            >{` ${province}, ${city}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Profile;
