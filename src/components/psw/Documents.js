import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import { setExpiration } from "../../actions/psw";

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
  const { updatePsw, id, verified, expiration, pswId } = props;
  const classes = useStyles();

  const handleExpiration = (date) => {
    setExpiration(id, pswId, date.toISOString());
  };
  const handleVerification = (event) => {
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   updatePsw(psw, verification, expiration);
  // }, [verification, expiration]);
  return (
    <Grid container item sm={12}>
      <Grid item container sm={12}>
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
            label="Documents expiration date:"
            value={new Date(expiration)}
            onChange={handleExpiration}
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

const ConnectedEdit = connect(null, { setExpiration })(Edit);

export { ConnectedEdit };

function Documents({
  id,
  verified,
  expiration,
  opswaIdentificationCard,
  pswId,
}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <ConnectedEdit {...{ id, verified, expiration, pswId }} />
      {/* {documents.map((document) => {
        return (
          <Grid item sm={6} key={document.id}>
            <Card className={classes.documentContainer}>
              <CardMedia
                component="img"
                src={document.url}
                title={document.name}
              ></CardMedia>
              <CardContent>
                <Typography>{document.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })} */}
      {
        <Grid item sm={6} key={opswaIdentificationCard.id}>
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
      }
    </Grid>
  );
}

export default Documents;
