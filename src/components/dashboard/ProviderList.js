import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getPsws } from "../../actions/psw";
import UserList from "../user/UserList";

function ProviderList(props) {
  const { getPsws, providerList } = props;
  useEffect(() => {
    getPsws();
  }, [getPsws]);

  return <UserList users={providerList} type="provider" />;
}

const mapStateToProps = (state) => {
  return { providerList: Object.values(state.providers) };
};
export default connect(mapStateToProps, { getPsws })(ProviderList);
