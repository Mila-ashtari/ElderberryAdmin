import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../../actions";
import { Route,  Switch, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pswContainer: {},
}));

function PswContainer(props) {
  const classes = useStyles();
  const { getPsw, pswArr} = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  return (
    <Fragment>
      <List className={classes.pswContainer}>
        {pswArr.map((psw, index) => {
          const { user } = psw.pswProfile;
          return (
            <Fragment>
              <ListItem
                button
                className={classes.listItem}
                key={index}
                component={Link}
                to={`/psw/${user.lastName}`}
              >
                <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PswContainer);
