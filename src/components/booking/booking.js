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

function Booking(props) {
  const { getBooking, booking } = props;
  console.log(booking);
  const { id, createdOn, transactionReference, client, customer, provider } =
    props.booking !== undefined && props.booking;

  useEffect(() => {
    getBooking(props.match.params.id);
  }, []);

  function RenderTableOne() {
    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label="bookings table">
            <TableHead>
              <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell>Created On</TableCell>
                <TableCell>Transaction Ref</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{createdOn}</TableCell>
                <TableCell>{transactionReference}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  function RenderTableTwo() {
    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label="bookings table">
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>PSW</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  component={Link}
                  to={`/client/${client.id}`}
                  target="_blank"
                  rel="noopener"
                >{`${client.firstName} ${client.lastName}`}</TableCell>
                <TableCell
                  component={Link}
                  to={`/customer/${customer}`}
                  target="_blank"
                  rel="noopener"
                >
                  {customer}
                </TableCell>
                <TableCell>{provider}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  return (
    <>
      <RenderTableOne />
      <RenderTableTwo />
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { booking: state.bookings[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getBooking })(Booking);
