import _ from "lodash";
const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_CUSTOMER":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
