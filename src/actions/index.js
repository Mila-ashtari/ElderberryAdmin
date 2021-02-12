import axios from "axios";

export const logIn = (username, password, callback) => async (dispatch) => {
  const response = await axios({
    url: "https://elderberrytest.herokuapp.com/api/tests/login",
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
    url: " https://elderberrytest.herokuapp.com/api/admin/all-psws",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    data:{
      userFields: {
        lastName: true,
        firstName: true,
        email: true,
        address: true,
        contactNumber: true,
      },
      'populateProfile': false,
    }
  });
  console.log(response.data);
  dispatch({ type: "PSW_DATA", payload: response.data.psws });
};
