import React from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
}));

function Clients({ clients }) {
    console.log(clients)
  const classes = useStyles();
  return (
    <List className={classes.CustomerContainer}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName}>Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider />
      {clients.map((client) => {
        const { languages, tasks } = client;
        return (
          <ListItem className={classes.listItem}>
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
        );
      })}
    </List>
  );
}

export default Clients;
