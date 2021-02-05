import React, { Fragment, useState } from "react";
import {
  ListItem,
  Avatar,
  List,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Grid,
  Link,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pswContainer: {
    padding: "30px",
  },
}));

const Psw = ({ psw, key }) => {
  const classes = useStyles();
  const { user, documents, skills, profile } = psw.pswProfile;
  const [open, setOpen] = useState(false);

  const renderProfile = (profile) => {
    const profileKeys = Object.keys(profile);
    profileKeys.shift();
    return (
      <List>
        {profileKeys.map(
          (key) =>
            key !== "profileImage" && (
              <ListItem>{`${key} : ${profile[key]}`}</ListItem>
            )
        )}
      </List>
    );
  };

  return (
    <Fragment>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => setOpen(true)}
        key={key}
      >
        <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
      </ListItem>

      <Dialog
        fullScreen
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>{`${user.firstName} ${user.lastName}`}</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                >
                  <Typography variant="h2">Profile</Typography>
                </AccordionSummary>
                <AccordionDetails>{renderProfile(profile[0])}</AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h2">Documents</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <Link
                        href={documents[0].opswaCard}
                        target="_blank"
                        rel="noopener"
                      >
                        OPSWA Card
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        href={documents[0].proofOfWorkEligibility}
                        target="_blank"
                        rel="noopener"
                      >
                        Proof of work eligibility
                      </Link>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h2">Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <Link
                        href={documents[0].opswaCard}
                        target="_blank"
                        rel="noopener"
                      >
                        OPSWA Card
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        href={documents[0].proofOfWorkEligibility}
                        target="_blank"
                        rel="noopener"
                      >
                        Proof of work eligibility
                      </Link>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Divider />
    </Fragment>
  );
};

export default Psw;
