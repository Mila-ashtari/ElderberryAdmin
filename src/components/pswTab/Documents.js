import React from "react";
import { connect } from "react-redux";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

import { updatePsw } from "../../actions/index";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "740px",
    margin: "0 auto",
  },
  icon: {
    fontSize: "1.1rem",
  },
  iconButton: {
    minWidth: "30px",
    color: "#aba7a7",
  },
}));

function Edit(props) {
  const { updatePsw, verified, expiration, id, user } = props;
  console.log({id, email:user.email, userID:user.id})
  const classes = useStyles();
  return (
    <Grid container item sm={12}>
      <Grid item container sm={12}>
        <Button
          className={classes.iconButton}
          onClick={() => updatePsw(id, user.email, user.id)}
        >
          <EditIcon className={classes.icon} />
        </Button>
        <Typography style={{ alignSelf: "center" }}>
          {`Documents Verified: ${verified}`}
        </Typography>
      </Grid>

      <Grid item container sm={12}>
        <Button className={classes.iconButton}>
          <EditIcon className={classes.icon} />
        </Button>
        <Typography style={{ alignSelf: "center" }}>
          {`Documents Expiration Date: ${expiration}`}
        </Typography>
      </Grid>
    </Grid>
  );
}

const ConnectedEdit = connect(null, { updatePsw })(Edit)

export  {ConnectedEdit}

function Documents({ documents, expiration, verified, id, user }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <ConnectedEdit {...{ expiration, verified, id, user }} />
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
