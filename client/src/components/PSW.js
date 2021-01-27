import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Box, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../actions";

const useStyles = makeStyles((theme) => ({
  pswContainer: {},
}));

function PSW(props) {
  const classes = useStyles();
  const { getPsw, pswArr } = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  const renderPSW = (psw, index) => {
    const { user } = psw.pswProfile;
    return (
      <Fragment key={index}>
        <ListItem className={classes.listItem}>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText>{`${user.firstName} ${user.lastName}`}</ListItemText>
        </ListItem>
        <Divider />
      </Fragment>
    );
  };
  return (
    <Box className={classes.pswContainer}>
      {pswArr.map((psw, index) => renderPSW(psw, index))}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PSW);
