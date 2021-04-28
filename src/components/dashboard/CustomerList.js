import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getCustomers } from "../../actions/customer";
import UserList from "../user/UserList";

function CustomerList(props) {
  const { getCustomers, customers } = props;
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);
  return <UserList users={customers} type="customer" />;
}

const mapStateToProps = (state) => {
  return { customers: Object.values(state.customers) };
};
export default connect(mapStateToProps, { getCustomers })(CustomerList);
