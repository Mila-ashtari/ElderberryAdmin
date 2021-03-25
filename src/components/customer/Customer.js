import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getCustomer } from "../../actions/customer";
import Profile from "./Profile";
import Clients from "./Clients";
import User from "../user/User";

// import Schedule from "./Schedule"

const Customer = (props) => {
  const { getCustomer } = props;
  const { user, clients, history } = props.customer !== undefined && props.customer;
  console.log(props.customer);
  const tabs = props.customer !== undefined && [
    {
      label: "Profile",
      component: <Profile user={user} />,
    },
    { label: "Clients", component: <Clients clients={clients} /> },
    { label: "Bookings", component: "" },
  ];

  useEffect(() => {
    getCustomer(props.match.params.id);
  }, []);

  return props.customer !== undefined && <User {...{ user, tabs }} />;
};

const mapStateToProps = (state, ownProps) => {
  return { customer: state.customers[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getCustomer })(Customer);
