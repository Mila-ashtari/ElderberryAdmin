import axios from "axios";

export const getClients = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url:
      "https://elderberry-development-api.herokuapp.com/api/admin/all-clients",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: "FETCH_CLIENTS", payload: response.data.clients });
};