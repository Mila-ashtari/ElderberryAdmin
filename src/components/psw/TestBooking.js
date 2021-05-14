import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

// function createData(
//   date,
//   startTime,
//   endTime,
//   hours,
//   client,
//   customer,
//   address
// ) {
//   return { date, startTime, endTime, hours, client, customer, address };
// }

// const rows = [
//   createData(
//     "Feb 19,2021",
//     "11:00am",
//     "03:00pm",
//     "4",
//     "Mila Ashtari",
//     "Farhad Ashtari",
//     "309 horsham st"
//   ),
//   createData(
//     "Feb 19,2021",
//     "11:00am",
//     "03:00pm",
//     "4",
//     "Mila Ashtari",
//     "Farhad Ashtari",
//     "309 horsham st"
//   ),
// ];
function Row({ booking }) {
  // const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const startDate = new Date(booking.startTime);
  const endDate = new Date(booking.endTime);

  return (
    <>
      <TableRow
        className={classes.root}
        hover="true"
        component={Link}
        to={`/booking/${booking.id}`}
        target="_blank"
        rel="noopener"
      >
        <TableCell>{startDate.toDateString()}</TableCell>
        <TableCell>{endDate.toDateString()}</TableCell>
        <TableCell>{booking.hours}</TableCell>
        <TableCell>{booking.client.firstName}</TableCell>
      </TableRow>
    </>
  );
}

function CollapsibleTable({ bookings }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Client</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <Row key={booking.id} booking={booking} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;
