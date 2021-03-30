import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPsws } from "../../actions/psw";
import UserList from "../user/UserList";

function PswList(props) {
  const { getPsws, psws } = props;
  useEffect(() => {
    getPsws();
  }, [getPsws]);
  return <UserList users={psws} type="psw" />;
}

const mapStateToProps = (state) => {
  return { psws: Object.values(state.psws) };
};
export default connect(mapStateToProps, { getPsws })(PswList);
