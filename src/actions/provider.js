import axios from "axios";
export const setIdentityExpiration = (id, expiration) => async (dispatch) => {
  const token = localStorage.getItem("token");
  await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/provider-identity-document",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      providerID: id,
      expiration,
    },
  });
  //   dispatch({
  //     type: "UPDATE_PSW",
  //     payload: { id, expiration },
  //   });
};
export const getProviders = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/all-providers",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: "FETCH_PROVIDERS", payload: response.data });
};
