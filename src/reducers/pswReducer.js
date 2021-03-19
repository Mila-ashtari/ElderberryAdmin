import _ from "lodash";
const pswReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PSWS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_PSW":
      return { ...state, [action.payload.id]: action.payload };
    case "UPDATE_PSW":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          verified: action.payload.verified,
          expiration: action.payload.expiration,
        },
      };
    default:
      return state;
  }
};

export default pswReducer;
