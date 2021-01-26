import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPSW } from "../actions";

function PSW(props) {
  const { getPSW, PSWData } = props;
  useEffect(() => {
    getPSW();
  }, [getPSW]);
  console.log(PSWData);
  return <div>hey</div>;
}

const mapStateToProps = (state) => {
  return { PSWData: state.PSWData };
};
export default connect(mapStateToProps, { getPSW })(PSW);
