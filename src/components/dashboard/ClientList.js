import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getClients } from "../../actions/client";
import UserList from "../user/UserList";

function ClientList(props) {
  const { getClients, clients } = props;
  useEffect(() => {
    getClients();
  }, [getClients]);
  return <UserList users={clients} type="client" />;
}

const mapStateToProps = (state) => {
  return { clients: Object.values(state.clients) };
};
export default connect(mapStateToProps, { getClients })(ClientList);
