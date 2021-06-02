import axios from "axios";

export const getBooking = (bookingId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/bookings",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      bookingList: [bookingId],
    },
  });
  dispatch({ type: "FETCH_BOOKING", payload: response.data[0] });
};

export const createBooking = (booking) => async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(booking)
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/book",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      clientID: "60753c4c21c79adecb5e3147",
      customerID: "60b56b53cf11bb6b5d937b2d",
      pswID: `${booking.pswID}`,
      bookingStartTime: booking.startDate,
      bookingEndTime: booking.endDate,
    },
  });
  console.log(response)
  // dispatch({ type: "CREATE_STREAM", payload: response.data });
};
