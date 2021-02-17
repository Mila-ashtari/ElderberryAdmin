import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Collapse,
  Button,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    textAlign: "right",
  },
  h3: {
    display: "inline",
  },
  paragragh: {
    display: "inline",
  },
}));
function Info({ profile }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <Box>
        <Typography variant="h3" className={classes.h3}>
          {"Gender: "}
        </Typography>
        <Typography className={classes.paragragh}>{profile.gender}</Typography>
      </Box>
      <Box>
        <Typography variant="h3" className={classes.h3}>
          {"Good with pets: "}
        </Typography>
        <Typography className={classes.paragragh}>
          {profile.petPreference}
        </Typography>
      </Box>
      <Collapse in={expanded} timeout="auto" collapsedHeight="70px">
        <Typography variant="h3" className={classes.h3}>
          {"About: "}
        </Typography>
        <Typography className={classes.paragragh}>
          {profile.aboutYourSelf}
        </Typography>
      </Collapse>
      <Box className={classes.buttonContainer}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
    </>
  );
}

export default Info;
