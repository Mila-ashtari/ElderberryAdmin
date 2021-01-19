import { combineReducers } from "redux";

const INITIAL_STATE = {
  isLogedIn: false,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogedIn: true, userId: action.payload };
    case "LOG_OUT":
      return { ...state, isLogedIn: false, userId: null };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});
