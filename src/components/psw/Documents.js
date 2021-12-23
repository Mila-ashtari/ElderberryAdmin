import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import { setOpswaExpiration } from "../../actions/psw";
import { setIdentityExpiration } from "../../actions/provider";

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
  radioGroup: {
    flexDirection: "row",
    marginLeft: "10px",
  },
  formLabel: {
    alignSelf: "center",
    fontSize: "1.1rem",
  },
}));

function Edit(props) {
  const classes = useStyles();
  const {
    setOpswaExpiration,
    setIdentityExpiration,
    id,
    expiration,
    pswId,
    identityDocument,
  } = props;
  const handleExpiration = (date) => {
    setOpswaExpiration(id, pswId, date.toISOString());
  };
  const handleIdentityExpiration = (date) => {
    setIdentityExpiration(id, date.toISOString());
  };

  return (
    <Grid container item sm={12}>
      {/* <Grid item container sm={12}>
        <FormLabel component="legend" className={classes.formLabel}>
          Documents verified?
        </FormLabel>
        <RadioGroup
          aria-label="document verified?"
          name="document verification"
          value={verified}
          onChange={handleVerification}
          className={classes.radioGroup}
        >
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
      </Grid> */}

      <Grid item sm={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker"
            // openTo="date"
            views={["year", "month", "date"]}
            label="OPSWA expiration date:"
            value={new Date(expiration)}
            onChange={handleExpiration}
            KeyboardButtonProps={{
              "aria-label": "change expiration date",
            }}
            InputLabelProps={{ style: { fontSize: "1.4rem" } }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item sm={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker"
            // openTo="date"
            views={["year", "month", "date"]}
            label="Identity Documents expiration date:"
            value={new Date(identityDocument.expiration)}
            onChange={handleIdentityExpiration}
            KeyboardButtonProps={{
              "aria-label": "change expiration date",
            }}
            InputLabelProps={{ style: { fontSize: "1.4rem" } }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}

const ConnectedEdit = connect(null, { setOpswaExpiration, setIdentityExpiration })(
  Edit
);
export { ConnectedEdit };

function Documents({
  id,
  verified,
  expiration,
  opswaIdentificationCard,
  identityDocument,
  pswId,
}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <ConnectedEdit
        {...{ id, verified, expiration, pswId, identityDocument }}
      />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={6}>
          <Card className={classes.documentContainer}>
            <CardMedia
              component="img"
              src={opswaIdentificationCard.url}
              title={opswaIdentificationCard.name}
            ></CardMedia>
            <CardContent>
              <Typography>{opswaIdentificationCard.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={6}>
          <Card className={classes.documentContainer}>
            <CardMedia
              component="img"
              src={identityDocument.front.url}
              title={identityDocument.front.name}
            ></CardMedia>
            <CardContent>
              <Typography>{identityDocument.front.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.documentContainer}>
            <CardMedia
              component="img"
              src={identityDocument.back.url}
              title={identityDocument.back.name}
            ></CardMedia>
            <CardContent>
              <Typography>{identityDocument.back.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Documents;
