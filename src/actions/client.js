import axios from "axios";

export const getClients = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url:
      "https://elderberry-development-api.herokuapp.com/api/admin/all-clients",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: "FETCH_CLIENTS", payload: response.data });
};

export const getClient = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberry-development-api.herokuapp.com/api/admin/client",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      clientID: id,
      loadClient: true,
    },
  });
  dispatch({ type: "FETCH_CLIENT", payload: response.data });
};
