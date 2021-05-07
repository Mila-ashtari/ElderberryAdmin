import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getPsw } from "../../actions/psw";
import Profile from "./Profile";
import Documents from "./Documents";
import Bookings from "./Bookings";
import Availability from "./Availability";
import User from "../user/User";
import TestBooking from "./TestBooking"
// import Schedule from "./Schedule";


const Psw = (props) => {
  const { psw, getPsw } = props;
  const { user, skills, profile, schedule, currentBookings, id } =
    props.psw !== undefined && props.psw;
  const tabs = props.psw !== undefined && [
    {
      label: "Profile",
      component: <Profile profile={profile} skills={skills} />,
    },
    { label: "Documentation", component: <Documents psw={psw} /> },
    // {
    //   label: "Schedule",
    //   component: <Schedule {...{ schedule, currentBookings }} />,
    // },
    { label: "Availability", component: <Availability schedule={schedule} /> },
    { label: "Bookings", component: <Bookings bookings={currentBookings}/> },
    { label: "TestBookings", component: <TestBooking bookings={currentBookings}/> }
  ];

  console.log(currentBookings)

  useEffect(() => {
    getPsw(props.match.params.id);
  }, []);

  return props.psw !== undefined && <User {...{ user, tabs }} />;
};

const mapStateToProps = (state, ownProps) => {
  return { psw: state.psws[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getPsw })(Psw);
