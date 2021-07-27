import axios from "axios";

export const getPsw = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberry-development-api.herokuapp.com/api/admin/provider",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      providerID: id,
    },
  });
  dispatch({ type: "FETCH_PROVIDER", payload: response.data });
};

export const setOpswaExpiration = (id, pswId, expiration) => async (dispatch) => {
  const token = localStorage.getItem("token");
    await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/service-expiration",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    params:{
      pswID:pswId
    },
    data: {
      providerID: id,
      serviceType: "personalSupportWorker",
      expiration: expiration,
    },
  });
  dispatch({
    type: "UPDATE_PSW",
    payload: { id, expiration },
  });
};