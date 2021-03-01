import _ from "lodash";
const pswReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PSWS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "UPDATE_PSW":
      return { ...state, [action.payload.id]: {...action.payload, verified:false} };
    default:
      return state;
  }
};

export default pswReducer