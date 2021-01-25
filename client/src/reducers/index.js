import { combineReducers } from "redux";

const INITIAL_STATE = {
  authenticated: true,
  errorMessage:'',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, authenticated: true };
    case "LOG_OUT":
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});
