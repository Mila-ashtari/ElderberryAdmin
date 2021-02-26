import axios from "axios";

const baseURL = "https://elderberry-development-api.herokuapp.com";

export const logIn = (username, password, callback) => async (dispatch) => {
  const response = await axios({
    url: "/api/admin/login",
    method: "POST",
    dataType: "json",
    data: {
      username: username,
      password: password,
    },
  });
  console.log(response.data.token);
  dispatch({ type: "LOG_IN", payload: response.data.token });
  localStorage.setItem("token", response.data.token);
  callback();
};

export const logOut = () => {
  localStorage.removeItem("token");
  return { type: "LOG_OUT" };
};

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

export const updatePsw = (id, email, userID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/psw",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data: {
      id,
      email,
      userID,
      verified: true,
      expiration: "2011-10-05T14:48:00.000Z",
    },
  });
  dispatch({ type: "UPDATE_PSW", payload: response.data });
};
