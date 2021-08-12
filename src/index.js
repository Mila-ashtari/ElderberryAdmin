import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import reducers from "./reducers";
import App from "./components/App";
import "./normalize.css";

const stripePromise = loadStripe(
  "pk_test_51HzDESFvbaLnOU6vOipxsrgWpKSKHUDKRbUUM0BCwLqd2W5tGim2t9kst6dgiTJxBYRDdRQHZdq056WNVCR6Id6R00RiyRqB4t"
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

// console.log(store)

ReactDOM.render(
  // <Elements stripe={stripePromise}>
    <Provider store={store}>
      <App />
    </Provider>,
  // </Elements>,
  document.getElementById("root")
);
