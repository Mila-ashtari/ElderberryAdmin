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
  List,
  ListItem,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    width: "150px",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    textAlign: "right",
  },
  h2: {
    display: "inline",
  },
  paragragh: {
    display: "inline",
  },
  tableContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tableTitle: {
    alignSelf: "center",
  },
  listItem: {
    display: "block",
  },
}));

function RenderTasks({ tasks }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.tableContainer}>
        <Typography variant="h2" className={classes.tableTitle}>
          Tasks
        </Typography>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <TableContainer component="paper">
          <Table className={classes.table} aria-label="Languages">
            <TableBody>
              {tasks.map((task, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{task}</TableCell>
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
function RenderLanguages({ languages }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.tableContainer}>
        <Typography variant="h2" className={classes.tableTitle}>
          Languages
        </Typography>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <TableContainer component="paper">
          <Table className={classes.table} aria-label="Languages">
            <TableHead>
              <TableRow>
                <TableCell>Language</TableCell>
                <TableCell align="right">Speaking</TableCell>
                <TableCell align="right">Reading</TableCell>
                <TableCell align="right">Writing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {languages.map((item) => {
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

function Profile({ client }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const {
    picture,
    address,
    weight,
    height,
    notes,
    languages,
    tasks,
    contactNumber,
  } = client;
  return (
    <Card className={classes.flexContainer}>
      <CardMedia
        className={classes.profileImage}
        component="img"
        src={picture}
        title="profile image"
      ></CardMedia>
      <CardContent className={classes.cardConetnt}>
        <List>
          <ListItem>
            <Typography variant="h2" className={classes.h2}>
              Address:
            </Typography>
            <Typography variant="body1">{`${address.addressLineOne}, ${address.postalCode},`}</Typography>
            <Typography variant="body1">{` ${address.province}, ${address.city}`}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h2" className={classes.h2}>
              Contact Phone Number:
            </Typography>
            <Typography variant="body1">{`${contactNumber}`}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h2" className={classes.h2}>
              {"Weight:  "}
            </Typography>
            <Typography className={classes.paragragh}>{weight}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h2" className={classes.h2}>
              {"Height:  "}
            </Typography>
            <Typography className={classes.paragragh}>{height}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h2" className={classes.h2}>
              {"Notes: "}
            </Typography>
            <Typography className={classes.paragragh}>{notes}</Typography>
          </ListItem>
          <RenderLanguages languages={languages} />
          <RenderTasks tasks={tasks} />
        </List>
      </CardContent>
    </Card>
  );
}

export default Profile;
