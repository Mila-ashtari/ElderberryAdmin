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
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pswContainer: {},
}));

const Psw = ({ psw }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user, documents, skills, profile } = psw.pswProfile;

  const renderProfile = (profile) => {
    const profileKeys = Object.keys(profile);
    profileKeys.shift();
    return (
      <List>
        {profileKeys.map((key) =>
          key === "profileImage" ? (
            <ListItem>
              <Avatar src={profile[key]}></Avatar>
            </ListItem>
          ) : (
            <listItem>{`${key} : ${profile[key]}`}</listItem>
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
      >
        <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
      </ListItem>

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
