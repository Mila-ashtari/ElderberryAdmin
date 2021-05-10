import axios from "axios";

export const getBooking = (bookingId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url:
      "https://elderberry-development-api.herokuapp.com/api/admin/bookings",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params:{
        "bookingList": [ bookingId]
       }
  });
  console.log(response.data[0])
  dispatch({ type: "FETCH_BOOKING", payload: response.data[0] });
};