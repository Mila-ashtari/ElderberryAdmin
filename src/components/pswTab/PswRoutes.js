import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Psw from "./Psw";

function PswRoutes(props) {
  const { pswArr } = props;

  return (
    <Switch>
      {pswArr.map((psw, index) => {
        const { user } = psw.pswProfile;
        return (
          <Route
            key={index}
            path={`/psw/${user.lastName}`}
            exact
            render={() => <Psw psw={psw} />}
          />
        );
      })}
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};

export default connect(mapStateToProps)(PswRoutes);
