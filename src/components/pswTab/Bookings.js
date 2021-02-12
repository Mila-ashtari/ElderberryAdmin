import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  //   marginTop: theme.spacing.unit * 3,
  //   overflowX: "auto",
  // },
  // table: {
  //   minWidth: 700,
  // },
}));
export const ExpandingRow = ({ row, index }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const rowKeys = Object.keys(row);
  return (
    <>
      <TableRow
        key={row.id}
        style={{ backgroundColor: index % 2 !== 1 && "#e4e2e2" }}
      >
        {rowKeys.map((key) => (
          <TableCell className={classes.tableCell}>{row[key]}</TableCell>
        ))}
        <TableCell>
          <Button onClick={() => setOpen(!open)}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </TableCell>
      </TableRow>
      <Collapse
        in={open}
        timeout="auto"
        component="tr"
        unmountOnExit
      >
        <TableRow>
          <div>Tasks</div>
          <div>Notes</div>
          <div>CC</div>
          <div>Payment</div>
        </TableRow>
      </Collapse>
    </>
  );
};

function Bookings(props) {
  const classes = useStyles();
  let id = 0;
  function createData(
    date,
    startTime,
    endTime,
    hours,
    client,
    customer,
    address
  ) {
    id += 1;
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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Start time</TableCell>
            <TableCell>End time</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <ExpandingRow row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Bookings;
