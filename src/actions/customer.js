import axios from "axios";

export const getCustomers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url:
      "https://elderberry-development-api.herokuapp.com/api/admin/all-customers",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      userFields: {
        lastName: true,
        firstName: true,
        email: true,
        address: true,
        contactNumber: true,
      },
      loadClients: true,
    },
  });
  dispatch({ type: "FETCH_CUSTOMERS", payload: response.data.customers });
};

export const getCustomer = (firstName, lastName) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: "https://elderberry-development-api.herokuapp.com/api/admin/customer",
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    params: {
      userFields: {
        lastName:lastName,
        firstName:firstName,
        email: true,
        address: true,
        contactNumber: true,
      },
      loadClients: true,
    },
  });
  console.log(response.data);
  // dispatch({ type: "FETCH_CUSTOMER", payload: response.data.customer });
};
