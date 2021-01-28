import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../actions";
import Psw from "./Psw";

const useStyles = makeStyles((theme) => ({
  pswContainer: {},
}));

function PswContainer(props) {
  const classes = useStyles();
  const { getPsw, pswArr } = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  return (
    <Box className={classes.pswContainer}>
      {pswArr.map((psw, index) => <Psw psw={psw} key={index}/>)}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PswContainer);
