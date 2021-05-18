import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
  bookingContainer: {
    paddingBottom: "0",
  },
  flexContainer: {
    display: "flex",
  },
  bookingListItem:{
    '&:hover': {
      backgroundColor: '#aca7a786',
  },
  "&:active": {
    backgroundColor: "#aca7a786",
  },
  },
  flexItem: {
    width: "20%",
    margin: "0px 20px",
  },
}));

function BookingList({ bookings }) {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <List className={classes.bookingContainer} component={Paper}>
        <ListItem className={classes.flexContainer} disabled>
          <Typography className={classes.flexItem}>Start Date</Typography>
          <Typography className={classes.flexItem}>End Date</Typography>
          <Typography className={classes.flexItem}>Hours</Typography>
          <Typography className={classes.flexItem}>Client</Typography>
        </ListItem>
        <Divider />
        {bookings.length !== 0 &&
          bookings.map((booking) => {
            const { startTime, endTime, hours, client } = booking;
            const startDate = new Date(startTime);
            const endDate = new Date(endTime);
            return (
              <Fragment key={booking.id}>
                <ListItem
                  button
                  className={classes.listItem}
                  className={classes.bookingListItem}
                  component={Link}
                  to={`/booking/${booking.id}`}
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemText
                    className={classes.flexContainer}
                    disableTypography
                  >
                    <Typography className={classes.flexItem}>
                      {startDate.toDateString()}
                    </Typography>
                    <Typography className={classes.flexItem}>
                      {endDate.toDateString()}
                    </Typography>
                    <Typography className={classes.flexItem}>
                      {hours}
                    </Typography>
                    <Typography className={classes.flexItem}>
                      {`${client.firstName} ${client.lastName} `}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
      </List>
    </section>
  );
}

export default BookingList;
