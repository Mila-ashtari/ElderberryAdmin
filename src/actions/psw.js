import axios from "axios";
export const getPsws = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberry-development-api.herokuapp.com/api/admin/all-psws",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      userFields: {
        lastName: true,
        firstName: true,
        email: true,
        address: true,
        contactNumber: true,
      },
      populateProfile: true,
    },
  });
  dispatch({ type: "FETCH_PSWS", payload: response.data });
};

export const updatePsw = (psw, verification, expiration) => async (
  dispatch
) => {
  const token = localStorage.getItem("token");
  const { user, id } = psw;
  const verified = verification === "true" ? true : false;
  await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/psw",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      id,
      email: user.email,
      userID: user.id,
      verified,
      expiration,
    },
  });
  dispatch({
    type: "UPDATE_PSW",
    payload: { id, verified, expiration },
  });
};

export const getPsw = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberry-development-api.herokuapp.com/api/admin/psw",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      pswID: id ,
      userFields: {
        lastName: true,
        firstName: true,
        email: true,
        address: true,
        contactNumber: true,
      },
      populateProfile: true,
    },
  });
  dispatch({ type: "FETCH_PSW", payload: response.data });
};