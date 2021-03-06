import { combineReducers } from 'redux';

import authReducer from './authReducer';
import providerReducer from './providerReducer';
import customerReducer from './customerReducer';
import clientReducer from './clientReducer';
import bookingReducer from './bookingReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  providers: providerReducer,
  customers: customerReducer,
  clients: clientReducer,
  bookings: bookingReducer,
  loadings: loadingReducer,
  errors: errorReducer,
});
