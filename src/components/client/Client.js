import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getClient } from "../../actions/client";
import Profile from "./Profile";
import TestBookings from "./TestBookings";


const Client = (props) => {
  const { client, getClient } = props;
  const { currentBookings, id } =
    props.client !== undefined && props.client;
  const tabs = props.client !== undefined && [
    {
      label: "Profile",
      component: <Profile client={client} />,
    },
    { label: "TestBookings", component: <TestBookings /> },
  ];

  useEffect(() => {
    getClient(props.match.params.id);
  }, []);

  return props.client !== undefined && <User {...{ user, tabs }} />;
};

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getClient })(Client);
