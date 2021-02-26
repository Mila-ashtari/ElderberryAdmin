const INITIAL_STATE = {
    authenticated: localStorage.getItem('token'),
    errorMessage: "",
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOG_IN":
        return { ...state, authenticated: action.payload };
      case "LOG_OUT":
        return { ...state, authenticated: "" };
      default:
        return state;
    }
  };