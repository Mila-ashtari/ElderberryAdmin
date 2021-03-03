import _ from "lodash";
const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default customerReducer;