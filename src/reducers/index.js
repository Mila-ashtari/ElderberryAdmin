import { combineReducers } from "redux";

import authReducer from './authReducer'
import pswReducer from './pswReducer'

export default combineReducers({
  auth: authReducer,
  pswData: pswReducer,
});
