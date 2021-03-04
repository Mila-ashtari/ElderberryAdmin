import axios from "axios";
export const getPsw = () => async (dispatch) => {
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
  dispatch({ type: "FETCH_PSWS", payload: response.data.psws });
};

export const updatePsw = (psw, verified, expiration) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const { user, id } = psw;
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/psw",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      id,
      email: user.email,
      userID: user.id,
      verified: false,
      expiration: "2013-10-05T14:48:00.000Z",
    },
  });
  console.log(response);
  dispatch({
    type: "UPDATE_PSW",
    payload: { id, verified: true, expiration: "2014-10-05T14:48:00.000Z" },
  });
};
