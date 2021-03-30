import _ from "lodash";
const clientReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_CLIENT":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default clientReducer;