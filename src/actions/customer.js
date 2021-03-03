import axios from "axios";

export const getCustomer = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const response = await axios({
      url: "https://elderberry-development-api.herokuapp.com/api/admin/all-customers",
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
        populateProfile: true,
      },
    });
    dispatch({ type: "FETCH_CUSTOMERS", payload: response.data.customers });
  };