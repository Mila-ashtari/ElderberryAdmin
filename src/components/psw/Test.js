import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  bookingContainer: {
    padding: "20px",
  },
  listHeader: {
    display: "flex",

  },
  flexContainer: {
    display: "flex",
  },
  column: {
    width: "20%",
    margin: "0px 20px",
  },
  
});

function Bookings({ bookings }) {
  const classes = useStyles();
  return (
    <List className={classes.bookingContainer}>
    <ListItem className={classes.listHeader} disabled>
      <Typography className={classes.column}>Date</Typography>
      <Typography className={classes.column}>Client</Typography>
    </ListItem>
    <Divider />
    {bookings.map((booking) => {
      const date = new Date(booking.startTime);
      return (
        <Fragment key={booking.id}>
          <ListItem
            button
            className={classes.listItem}
            component={Link}
            to={`/booking/${booking.id}`}
            target="_blank"
            rel="noopener"
          >
            <ListItemText
              className={classes.flexContainer}
              disableTypography
            >
              <Typography className={classes.column}>
              {date.toDateString()}
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
        </Fragment>
      );
    })}
  </List>
  );
}

export default Bookings;
