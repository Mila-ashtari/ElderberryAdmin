import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooking } from "../../actions/booking";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
  // tableOne: {
  //   marginBottom: "20px",
  // },
  // tableTwo: {
  //   marginBottom: "20px",
  // },
  contentRow:{
    backgroundColor:"#0aae6a81"
  }
}));

function Booking(props) {
  const classes = useStyles();
  const { getBooking, booking } = props;
  const {
    id,
    createdOn,
    transactionReference,
    client,
    customer,
    provider,
    startTime,
    endTime,
    hours,
    charge,
  } = props.booking !== undefined && props.booking;

  console.log(booking);

  useEffect(() => {
    getBooking(props.match.params.id);
  }, []);

  function RenderTableOne() {
    return (
      <TableContainer component={Paper} className={classes.tableOne}>
        <Table aria-label="bookings table">
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Created On</TableCell>
              <TableCell>Transaction Ref</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.contentRow}>
              <TableCell>{id}</TableCell>
              <TableCell>{createdOn}</TableCell>
              <TableCell>{transactionReference}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function RenderTableTwo() {
    return (
      <>
        <TableContainer component={Paper} className={classes.tableTwo}>
          <Table aria-label="bookings table">
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>PSW</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.contentRow}>
                <TableCell
                  component={Link}
                  to={`/client/${client.id}`}
                  target="_blank"
                  rel="noopener"
                >{`${client.firstName} ${client.lastName}`}</TableCell>
                <TableCell
                  component={Link}
                  to={`/customer/${customer.id}`}
                  target="_blank"
                  rel="noopener"
                >
                  {`${customer.firstName} ${customer.lastName}`}
                </TableCell>
                <TableCell
                  component={Link}
                  to={`/psw/${provider.id}`}
                  target="_blank"
                  rel="noopener"
                >{`${provider.firstName} ${provider.lastName}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  function RenderTableThree() {
    return (
      <TableContainer component={Paper} className={classes.tableThree}>
        <Table aria-label="bookings table">
          <TableHead>
            <TableRow>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Charge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.contentRow}>
              <TableCell>{new Date(startTime).toDateString()}</TableCell>
              <TableCell>{new Date(endTime).toDateString()}</TableCell>
              <TableCell>{hours}</TableCell>
              <TableCell>{charge}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    props.booking !== undefined && (
      <section className={classes.container}>
        <RenderTableOne />
        <RenderTableTwo />
        <RenderTableThree/>
      </section>
    )
  );
}
const mapStateToProps = (state, ownProps) => {
  return { booking: state.bookings[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getBooking })(Booking);
