export const logIn = (email, password, callback) => {
  return { type: "LOG_IN" };
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};
