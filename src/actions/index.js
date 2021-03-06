import axios from "axios";

// const baseURL = "https://elderberry-development-api.herokuapp.com";

export const logIn = (username, password, callback) => async (dispatch) => {
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/login",
    method: "POST",
    dataType: "json",
    data: {
      username: username,
      password: password,
    },
  });
  dispatch({ type: "LOG_IN", payload: response.data.accessToken });
  localStorage.setItem("token", response.data.accessToken);
  callback();
};

export const logOut = () => {
  localStorage.removeItem("token");
  return { type: "LOG_OUT" };
};


