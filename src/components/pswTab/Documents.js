import React from "react";
import {
  List,
  ListItem,
  Link,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  documentContainer: {},
}));
function Documents({ documents }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <Card className={classes.documentContainer}>
          <CardMedia
            component="img"
            src={`${documents[0].opswaCard}`}
            title="OPSWA Card"
          ></CardMedia>
          <CardContent>
            <Typography>OPSWA Card</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <Card className={classes.documentContainer}>
          <CardMedia
            component="img"
            src={`${documents[0].proofOfWorkEligibility}`}
            title="Proof of work eligibility"
          ></CardMedia>
          <CardContent>
            <Typography>Proof of work eligibility</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Documents;
