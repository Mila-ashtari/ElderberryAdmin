import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { createLoadingSelector } from '../../utils/loadingSelector';
import { getProviders } from '../../actions/provider';
import UserList from '../user/UserList';
import loadingReducer from '../../reducers/loadingReducer';

function ProviderList(props) {
  const { getProviders, providerList, loading } = props;
  console.log(loading);
  useEffect(() => {
    getProviders();
  }, [getProviders]);

  return loading ? <div>loading</div> : <UserList users={providerList} />;
}

const mapStateToProps = (state) => {
  return {
    providerList: Object.values(state.providers),
    loading: state.loadings.FETCH_PROVIDERS,
  };
};
export default connect(mapStateToProps, { getProviders })(ProviderList);
