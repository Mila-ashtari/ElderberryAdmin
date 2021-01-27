import axios from "axios";

export const logIn = (username, password, callback) => async (dispatch) => {
  const response = await axios({
    url: "https://elderberrytest.herokuapp.com/api/tests/login",
    method: "POST",
    dataType: "json",
    data: {
      username: "admin",
      password: "password",
    },
  });
  console.log(response.data.token);
  dispatch({ type: "LOG_IN", payload: response.data.token });
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const getPsw = () => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTE3NjkzNDIsImRhdGEiOnsiYWNjZXNzQ29kZSI6IjRhNzNjNjlmLTdkNGEtNGIwZS1iOWY2LTE1MTQxNTY3MDlkYyIsIm5hbWUiOiJNaWxhIn0sImlhdCI6MTYxMTc2NTc0Mn0.RhvBcdmnEOVUq1qZg6_CObjQtXHYjnXANGa6G05LXl8";
  const response = await axios({
    url: " https://elderberrytest.herokuapp.com/api/tests/all-psws",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data)
  dispatch({ type: "PSW_DATA", payload: response.data.psws });
};
