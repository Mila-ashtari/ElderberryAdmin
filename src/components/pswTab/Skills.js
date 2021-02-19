import React, { useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Collapse,
  Box,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "block",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tableTitle: {
    alignSelf: "center",
  },
}));
export function RenderCertifications({ certificationsAndLicenses }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.flexContainer}>
        <Typography variant="h3" className={classes.tableTitle}>
          Certification and Licenses
        </Typography>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <TableContainer component="paper">
          <Table
            className={classes.table}
            aria-label="Certification and Licenses Table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificationsAndLicenses.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </ListItem>
  );
}
export function RenderLanguageProficiencies({ languageProficiencies }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.flexContainer}>
        <Typography variant="h3" className={classes.tableTitle}>
          Language Proficiencies
        </Typography>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <TableContainer component="paper">
          <Table className={classes.table} aria-label="Language proficiencies">
            <TableHead>
              <TableRow>
                <TableCell>Language</TableCell>
                <TableCell align="right">Speaking</TableCell>
                <TableCell align="right">Reading</TableCell>
                <TableCell align="right">Writing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {languageProficiencies.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.language}</TableCell>
                    <TableCell align="right">
                      {item.speakingProficiency}
                    </TableCell>
                    <TableCell align="right">
                      {item.readingProficiency}
                    </TableCell>
                    <TableCell align="right">
                      {item.writingProficiency}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </ListItem>
  );
}
export function RenderQuestions({ otherQuestions, yesNoQuestions }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.flexContainer}>
        <Typography variant="h3" className={classes.tableTitle}>
          Questions
        </Typography>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <TableContainer component="paper">
          <Table className={classes.table} aria-label="Questions">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {otherQuestions.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.question}</TableCell>
                    <TableCell>{item.answer}</TableCell>
                  </TableRow>
                );
              })}
              {yesNoQuestions.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.question}</TableCell>
                    <TableCell>{item.answer}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </ListItem>
  );
}
function Skills({ skills }) {
  const {
    certificationsAndLicenses,
    languageProficiencies,
    otherQuestions,
    yesNoQuestions,
  } = skills;

  return (
    <List>
      <RenderCertifications {...{ certificationsAndLicenses }} />
      <RenderLanguageProficiencies {...{ languageProficiencies }} />
      <RenderQuestions {...{ otherQuestions, yesNoQuestions }} />
    </List>
  );
}

export default Skills;
