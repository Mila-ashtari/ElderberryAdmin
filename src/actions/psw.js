import axios from "axios";
export const getPsws = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/all-providers",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    // params: {
    //   userFields: {
    //     lastName: true,
    //     firstName: true,
    //     email: true,
    //     address: true,
    //     contactNumber: true,
    //   },
    //   populateProfile: true,
    // },
  });
  dispatch({ type: "FETCH_PSWS", payload: response.data });
};

export const setExpiration = (id, expiration) => async (dispatch) => {
  const token = localStorage.getItem("token");
  await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/service-expiration",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      providerID: id,
      serviceType: "personalSupportWorker",
      expiration: expiration,
    },
  });
  // dispatch({
  //   type: "UPDATE_PSW",
  //   payload: { id, verified, expiration },
  // });
};

export const getPsw = (id) => async (dispatch) => {
  console.log("yes");
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberry-development-api.herokuapp.com/api/admin/provider",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      providerID: id,
    },
  });
  dispatch({ type: "FETCH_PSW", payload: response.data });
};
