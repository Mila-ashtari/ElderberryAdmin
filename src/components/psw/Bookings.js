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

function createData(
  date,
  startTime,
  endTime,
  hours,
  client,
  customer,
  address
) {
  return { date, startTime, endTime, hours, client, customer, address };
}

const rows = [
  createData(
    "Feb 19,2021",
    "11:00am",
    "03:00pm",
    "4",
    "Mila Ashtari",
    "Farhad Ashtari",
    "309 horsham st"
  ),
  createData(
    "Feb 19,2021",
    "11:00am",
    "03:00pm",
    "4",
    "Mila Ashtari",
    "Farhad Ashtari",
    "309 horsham st"
  ),
];
export function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.startTime}</TableCell>
        <TableCell align="right">{row.endTime}</TableCell>
        <TableCell align="right">{row.hours}</TableCell>
        <TableCell align="right">{row.client}</TableCell>
        <TableCell align="right">{row.customer}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
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

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;