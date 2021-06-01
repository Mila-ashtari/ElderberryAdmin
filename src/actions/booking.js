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
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/book",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      clientID: "60753c4621c79adecb5e30ce",
      customerID: "60753c4721c79adecb5e30e7",
      pswID: "60753c4a21c79adecb5e3118",
      bookingStartTime: "2021-04-27T22:03:59.626Z",
      bookingEndTime: "2021-04-27T23:03:59.626Z",
    },
  });
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};
