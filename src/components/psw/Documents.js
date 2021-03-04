import React, { useState } from "react";
import { connect } from "react-redux";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  TextField,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

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
}));

function Edit(props) {
  const { updatePsw, psw } = props;
  const [verified, setVerified] = useState(psw.verified);
  const [expiration, setExpiration] = useState(new Date(psw.expiration));
  const classes = useStyles();

  const handleDateChange = (date) => {
    setExpiration(date);
  };
  return (
      <Grid container item sm={12}>
        <Grid item container sm={12}>
        <TextField id="validationInput" label="yes" type="radio"/>
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
              label="Documents expiration date"
              value={expiration}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change expiration date",
              }}
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
