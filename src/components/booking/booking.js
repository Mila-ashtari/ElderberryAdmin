import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooking } from "../../actions/booking";

function Booking(props) {
  const { getBooking, booking } = props;
  console.log(booking)

  useEffect(() => {
    getBooking(props.match.params.id);
  }, []);

  return (
      <>"hello"</>
  )
}
const mapStateToProps = (state, ownProps) => {
  return { booking: state.bookings[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getBooking })(Booking);
