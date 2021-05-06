
const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BOOKING":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;