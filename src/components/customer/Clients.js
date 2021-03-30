import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
  Dialog,
  DialogContent,
  CardMedia,
  CardContent,
  Button,
  Box,
  Collapse,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const useStyles = makeStyles((theme) => ({
  CustomerList: {
    padding: "20px",
  },
  listHeader: {
    display: "flex",
  },
  id: {
    width: "20%",
    margin: "0px 20px",
  },
  firstName: {
    width: "10%",
    margin: "0px 20px",
  },
  lastName: {
    width: "10%",
    margin: "0px 20px",
  },
  flexContainer: {
    display: "flex",
  },
  profileImage: {
    width: "150px",
    margin: "0 auto",
  },
  h3: {
    fontSize: "1rem",
  },
  paragragh: {
    fontSize: "0.8rem",
  },
  tableTitle: {
    alignSelf: "center",
  },
  colapseListItem: {
    display: "block",
  },
}));

export function RenderLanguages({ languages }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.flexContainer}>
        <Typography variant="h3" className={classes.h3}>
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
    </>
  );
}

function Clients({ clients }) {
  console.log(clients);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <List className={classes.CustomerList}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName}>Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider />
      {clients.map((client) => {
        const { languages, tasks, address } = client;
        return (
          <>
            <ListItem
              button
              className={classes.listItem}
              onClick={() => setOpen(true)}
              className={classes.listItem}
            >
              <ListItemText className={classes.flexContainer} disableTypography>
                <Typography className={classes.id}>ID</Typography>
                <Typography className={classes.lastName}>
                  {client.lastName}
                </Typography>
                <Typography className={classes.firstName}>
                  {client.firstName}
                </Typography>
              </ListItemText>
            </ListItem>
          </>
        );
      })}
    </List>
  );
}

export default Clients;
