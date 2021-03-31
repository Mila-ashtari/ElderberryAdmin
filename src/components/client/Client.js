import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getClient } from "../../actions/client";
// import Profile from "./Profile";
// import Documents from "./Documents";
// // import Bookings from "./Bookings";
// import Availability from "./Availability";
// import User from "../user/User";
// // import Schedule from "./Schedule"
// import TestBookings from "./TestBookings";

const Client = (props) => {
  const { client, getClient } = props;
  const { user, skills, profile, schedule, currentBookings, id } =
    props.client !== undefined && props.client;
//   const tabs = props.client !== undefined && [
//     {
//       label: "Profile",
//       component: <Profile profile={profile} skills={skills} />,
//     },
//     { label: "Documentation", component: <Documents client={client} /> },
//     // { label: "Schedule", component: <Schedule {...{schedule, currentBookings}}/> },
//     { label: "Availability", component: <Availability schedule={schedule} /> },
//     // { label: "Bookings", component: <Bookings /> },
//     { label: "TestBookings", component: <TestBookings /> },
//   ];

  useEffect(() => {
    getClient(props.match.params.id);
  }, []);

  return props.client !== undefined && <User {...{ user, tabs }} />;
};

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getClient })(Client);
