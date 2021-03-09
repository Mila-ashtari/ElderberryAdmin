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

import { updatePsw } from "../../actions/psw";

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
  const { updatePsw, psw } = props;
  const [verification, setVerification] = useState(`${psw.verified}`);
  const [expiration, setExpiration] = useState(new Date(psw.expiration));
  const classes = useStyles();

  useEffect(() => {
    updatePsw(psw, verification, expiration);
  }, [verification, expiration]);
  return (
    <Grid container item sm={12}>
      <Grid item container sm={12}>
        <FormLabel component="legend" className={classes.formLabel}>
          Documents verified?
        </FormLabel>
        <RadioGroup
          aria-label="document verified?"
          name="document verification"
          value={verification}
          onChange={(event) => {
            setVerification(event.target.value);
          }}
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
            value={expiration}
            onChange={(date) => {
              setExpiration(date.toISOString());
            }}
            KeyboardButtonProps={{
              "aria-label": "change expiration date",
            }}
            InputLabelProps={{style:{fontSize:"1.4rem"}}}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}

const ConnectedEdit = connect(null, { updatePsw })(Edit);

export { ConnectedEdit };

function Documents({ psw }) {
  const classes = useStyles();
  const { documents } = psw;
  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <ConnectedEdit psw={psw} />
      {documents.map((document) => {
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
      })}
    </Grid>
  );
}

export default Documents;
