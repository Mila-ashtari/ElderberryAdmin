import { combineReducers } from "redux";

import authReducer from "./authReducer";
import pswReducer from "./pswReducer";
import customerReducer from "./customerReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
  auth: authReducer,
  psws: pswReducer,
  customers: customerReducer,
  clients: clientReducer,
});
