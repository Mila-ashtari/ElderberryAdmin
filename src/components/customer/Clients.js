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
  CustomerContainer: {
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

export function RenderLanguages({languages}) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.flexContainer}>
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
    </>
  );
}

function Clients({ clients }) {
  console.log(clients);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <List className={classes.CustomerContainer}>
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
            <Dialog
              open={open}
              scroll="body"
              onClose={() => {
                setOpen(false);
              }}
            >
              <DialogContent>
                <CardMedia
                  className={classes.profileImage}
                  component="img"
                  src={client.picture}
                  title="profile image"
                ></CardMedia>
                <CardContent>
                  <List>
                    <ListItem>
                      <Typography variant="h3" className={classes.h3}>
                        Address:
                      </Typography>
                      <Typography className={classes.paragragh}>
                        {`${address.addressLineOne}, ${address.city}, ${address.province}, ${address.postalCode}`}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="h3" className={classes.h3}>
                        Weight:
                      </Typography>
                      <Typography className={classes.paragragh}>
                        {client.weight}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="h3" className={classes.h3}>
                        Height:
                      </Typography>
                      <Typography className={classes.paragragh}>
                        {client.height}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="h3" className={classes.h3}>
                        Mobility:
                      </Typography>
                      <Typography className={classes.paragragh}>
                        {client.mobility}
                      </Typography>
                    </ListItem>
                    <ListItem className={classes.colapseListItem}>
                        <RenderLanguages languages={languages}/>
                    </ListItem>
                  </List>
                </CardContent>
              </DialogContent>
            </Dialog>
          </>
        );
      })}
    </List>
  );
}

export default Clients;
