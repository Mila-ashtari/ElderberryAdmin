import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getPsws } from "../../actions/psw";
import UserList from "../user/UserList";

function PswList(props) {
  const { getPsws, pswList } = props;
  useEffect(() => {
    getPsws();
  }, [getPsws]);

  return <UserList users={pswList} type="psw" />;
}

const mapStateToProps = (state) => {
  return { pswList: Object.values(state.psws) };
};
export default connect(mapStateToProps, { getPsws })(PswList);
