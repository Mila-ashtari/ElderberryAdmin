import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));
function Skills({ skills }) {
  const classes = useStyles();
  const {
    certificationsAndLicenses,
    languageProficiencies,
    otherQuestions,
    yesNoQuestions,
  } = skills;
  console.log(certificationsAndLicenses);

  return (
    <>
      <Typography variant="h3">Certification and Licenses</Typography>
      <List>
        {certificationsAndLicenses.map((item) => {
          return (
            <ListItem>
              <ListItemText>
                <Typography>{`Type: ${item.type}`}</Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Skills;
