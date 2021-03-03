import { combineReducers } from "redux";

import authReducer from "./authReducer";
import pswReducer from "./pswReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  auth: authReducer,
  psws: pswReducer,
  customers: customerReducer,
});
