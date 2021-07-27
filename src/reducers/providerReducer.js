import _ from "lodash";
const providerReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PROVIDERS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_PROVIDER":
      return { ...state, [action.payload.id]: action.payload };
    case "UPDATE_OPSWA_EXPIRATION":  
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          services: {
            ...state[action.payload.id].services,
            personalSupportWorker: {
              ...state[action.payload.id].services.personalSupportWorker,
              expiration: action.payload.expiration,
            },
          },
        },
      };

    case "UPDATE_IDENTITY_EXPIRATION":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          identityDocument: {
            ...state[action.payload.id].identityDocument,
            expiration: action.payload.expiration,
          },
        },
      };
    default:
      return state;
  }
};

export default providerReducer;
