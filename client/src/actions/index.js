import axios from "axios";

export const logIn = (email, password, callback) => {
  return { type: "LOG_IN" };
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const getPSW = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/psw");

  dispatch({ type: "PSW_DATA", payload: response.data });
};
