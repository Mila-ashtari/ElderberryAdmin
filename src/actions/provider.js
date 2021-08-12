import axios from "axios";
export const setIdentityExpiration = (id, expiration) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response =await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/provider-identity-document",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      providerID: id,
      expiration,
    },
  });
  console.log(response.data)
    dispatch({
      type: "UPDATE_IDENTITY_EXPIRATION",
      payload: { id, expiration },
    });
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

export const getProvider = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/provider",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      providerID: id,
    },
  });
  dispatch({ type: "FETCH_PROVIDER", payload: response.data });
};
