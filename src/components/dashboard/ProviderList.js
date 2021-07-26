import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getProviders } from "../../actions/provider";
import UserList from "../user/UserList";

function ProviderList(props) {
  const { getProviders, providerList } = props;
  useEffect(() => {
    getProviders();
  }, [getProviders]);

  return <UserList users={providerList} type="provider" />;
}

const mapStateToProps = (state) => {
  return { providerList: Object.values(state.providers) };
};
export default connect(mapStateToProps, { getProviders })(ProviderList);
