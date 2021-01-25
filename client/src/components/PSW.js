import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPSW } from "../actions";

function PSW(props) {
  const { getPSW } = props;
  useEffect(() => {
    getPSW();
  }, []);
  return <div>hey</div>;
}

const mapStateToProps = (state) => {
  console.log(state.PSWData);
  return { PSWData: state.PSWData };
};
export default connect(mapStateToProps, { getPSW })(PSW);
