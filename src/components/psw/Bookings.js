import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

// function createData(date, bookingId, transactionId) {
//   return { date, bookingId, transactionId };
// }

// const rows = [
//   createData("Feb 19,2021", "3453434435", "345345345"),
//   createData("Feb 19,2021", "654564545645", "456456456"),
// ];
function Row({ booking }) {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const date = new Date(booking.startTime);

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {date. toDateString()}
        </TableCell>
        <TableCell align="right">{booking.id}</TableCell>
        {/* <TableCell align="right">{booking.transactionRefrence}</TableCell> */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>Tasks</div>
            <div>Notes</div>
            <div>CC</div>
            <div>payment</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function Bookings({ bookings }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Booking ID</TableCell>
            {/* <TableCell align="right">Transaction ID</TableCell> */}
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

export default Bookings;
