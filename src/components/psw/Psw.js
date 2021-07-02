import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getPsw } from "../../actions/psw";
import Profile from "./Profile";
import Documents from "./Documents";
import Availability from "./Availability";
import User from "../user/User";
import Bookings from "./Bookings";
import Schedule from "./Schedule";
import requiredAuth from "../requiredAuth";

const Psw = (props) => {
  const { psw, getPsw } = props;
  const {
    firstName,
    lastName,
    services: {
      personalSupportWorker: {
        profile,
        skills,
        schedule,
        opswaIdentificationCard,
      },
    },
    currentBookings,
    id,
    verified,
    expiration,
    opswaIdentificationCard,
  } = props.psw !== undefined && props.psw;
  console.log(psw);
  const tabs = props.psw !== undefined && [
    {
      label: "Profile",
      component: <Profile profile={profile} skills={skills} />,
    },
    {
      label: "Documentation",
      component: (
        <Documents
          {...{
            id,
            verified,
            expiration,
            opswaIdentificationCard,
            opswaIdentificationCard,
          }}
        />
      ),
    },
    {
      label: "Schedule",
      component: <Schedule {...{ schedule, currentBookings, id }} />,
    },
    // { label: "Availability", component: <Availability schedule={schedule} /> },
    // { label: "Bookings", component: <Bookings bookings={currentBookings}/> }
  ];
  useEffect(() => {
    getPsw(props.match.params.id);
  }, []);

  return (
    props.psw !== undefined && <User {...{ firstName, lastName, tabs }} />
    // <></>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { psw: state.psws[ownProps.match.params.id] };
};

const ConnectedPsw = connect(mapStateToProps, { getPsw })(Psw);

export default requiredAuth(ConnectedPsw);
