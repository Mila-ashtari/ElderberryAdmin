import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getProvider } from "../../actions/provider";
import Profile from "./Profile";
import Documents from "./Documents";
import Availability from "./Availability";
import User from "../user/User";
import Bookings from "./Bookings";
import Schedule from "./Schedule";
import requiredAuth from "../requiredAuth";

const Psw = (props) => {
  const { getProvider } = props;
  console.log(props.psw)
  const {
    firstName,
    lastName,
    currentBookings,
    id,
    identityDocument
  } = props.psw !== undefined && props.psw;
 const {
      profile,
      qualifications,
      schedule,
      opswaIdentificationCard,
      verified,
      expiration,
    }=props.psw !== undefined && props.psw.services.personalSupportWorker
  const pswId= props.psw !== undefined && props.psw.services.personalSupportWorker
  const tabs = props.psw !== undefined && [
    {
      label: "Profile",
      component: <Profile profile={profile} qualifications={qualifications} />,
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
            identityDocument,
            pswId
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
    getProvider(props.match.params.id);
  }, []);
  // const [psw, setPsw] = useState(null);
  // useEffect(() => {
  //   getProvider(props.match.params.id)
  //     .then((provider) => {
  //       console.log(provider);
  //       setPsw(() => provider.personalSupportWorker);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    props.psw !== undefined && <User {...{ firstName, lastName, tabs }} />
    // <div></div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { psw: state.providers[ownProps.match.params.id] };
};

const ConnectedPsw = connect(mapStateToProps, { getProvider })(Psw);

export default requiredAuth(ConnectedPsw);
