import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getClient } from "../../actions/client";
import Profile from "./Profile";
import TestBookings from "./TestBookings";
import requiredAuth from "../requiredAuth";
import User from "../user/User";

const Client = (props) => {
  const { client, getClient } = props;
  const { currentBookings, id, firstName, lastName } =
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

  return (
    props.client !== undefined && <User {...{ firstName, lastName, tabs }} />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

const ConectedClient = connect(mapStateToProps, { getClient })(Client);

export default requiredAuth(ConectedClient);
