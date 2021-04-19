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
  flexContainer: {
    display: "flex",
  },
  profileImage: {
    width: "150px",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    textAlign: "right",
  },
  h3: {
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

function RenderAdresses() {
  return;
}

function Tasks({ tasks }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Box className={classes.tableContainer}>
        <Typography variant="h3" className={classes.tableTitle}>
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
function RenderLanguages({ languages }) {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    return (
      <ListItem className={classes.listItem}>
        <Box className={classes.tableContainer}>
          <Typography variant="h3" className={classes.tableTitle}>
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
  const { picture, address, weight, height, notes, languages } = client;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.flexContainer}>
          <CardMedia
            className={classes.profileImage}
            component="img"
            src={picture}
            title="profile image"
          ></CardMedia>
          <CardContent>
            <List>
              <ListItem>
                <Typography variant="h3" className={classes.h3}>
                  {"Weight:  "}
                </Typography>
                <Typography className={classes.paragragh}>{weight}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3" className={classes.h3}>
                  {"Height:  "}
                </Typography>
                <Typography className={classes.paragragh}>{height}</Typography>
              </ListItem>
              <ListItem>
                <Collapse in={expanded} timeout="auto" collapsedHeight="70px">
                  <Typography variant="h3" className={classes.h3}>
                    {"Notes: "}
                  </Typography>
                  <Typography className={classes.paragragh}>{notes}</Typography>
                </Collapse>
                <Box className={classes.buttonContainer}>
                  <Button onClick={() => setExpanded(!expanded)}>
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Button>
                </Box>
              </ListItem>
              <RenderLanguages languages={languages} />
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Profile;
