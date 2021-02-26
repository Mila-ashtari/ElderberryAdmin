import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PSWS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "UPDATE_PSW":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
