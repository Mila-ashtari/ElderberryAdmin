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
  dispatch({ type: "LOG_IN", payload: response.data.token });
  callback()
  localStorage.setItem("token", response.data.token);
};

export const logOut = () => {
  localStorage.removeItem('token')
  return { type: "LOG_OUT" };
};

export const getPsw = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: " https://elderberrytest.herokuapp.com/api/tests/all-psws",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data);
  dispatch({ type: "PSW_DATA", payload: response.data.psws });
};
