import { combineReducers } from "redux";

const INITIAL_STATE = {
  authenticated: true,
  errorMessage: "",
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

const PSW_INTIIAL_STATE=[]

const PSWReduser = (state = PSW_INTIIAL_STATE, action) => {
  if (action.type === "PSW_DATA") {
    return "me";
  }

  return state;
};

export default combineReducers({
  auth: authReducer,
  PSWData: PSWReduser,
});
