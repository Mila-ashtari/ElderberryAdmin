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
} from "@material-ui/core";
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
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(psw.verified);
  const [expiration, setExpiration] = useState(psw.expiration);
  const classes = useStyles();
  return (
    <>
      <Grid container item sm={12}>
        <Grid item container sm={12}>
          <Button
            className={classes.iconButton}
            onClick={() => setOpen(true)}
          >
            <EditIcon className={classes.icon} />
          </Button>
          <Typography style={{ alignSelf: "center" }}>
            {`Documents Verified: ${psw.verified}`}
          </Typography>
        </Grid>

        <Grid item container sm={12}>
          <Typography style={{ alignSelf: "center" }}>
            {`Documents Expiration Date: ${psw.expiration}`}
          </Typography>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        scroll="body"
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          
        </DialogContent>
      </Dialog>
    </>
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
