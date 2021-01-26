import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Tab, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../actions";

const useStyles = makeStyles((theme) => ({
  pswContainer:{}
}))

function PSW(props) {
  const classes = useStyles();
  const { getPsw, pswArr } = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  console.log(pswArr);
  const renderPSW=(psw)=>{
    return 
  }
  return <Box className={classes.pswContainer}>{}</Box>;
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PSW);
