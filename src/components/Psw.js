import React, { Fragment, useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pswContainer: {},
}));

const Psw = ({ psw }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user, documents, skills } = psw.pswProfile;
  return (
    <Fragment>
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => setOpen(true)}
        >
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
        </ListItem>
      </List>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>{`${user.firstName} ${user.lastName}`}</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h2">Documents</Typography>
              <List>
                <ListItem>
                  <Link href={documents[0].opswaCard} target="_blank" rel="noopener">OPSWA Card</Link>
                </ListItem>
                <ListItem>
                  <Link href={documents[0].proofOfWorkEligibility} target="_blank" rel="noopener">Proof of work eligibility</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <Typography variant="h2">Skills</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Divider />
    </Fragment>
  );
};

export default Psw;
