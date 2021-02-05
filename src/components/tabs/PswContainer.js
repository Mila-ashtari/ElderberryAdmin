import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../../actions";
import Psw from "../pswContent/Psw";

const useStyles = makeStyles((theme) => ({
  pswContainer: {
    padding: "20px",
  },
}));

function PswContainer(props) {
  const classes = useStyles();
  const { getPsw, pswArr } = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  return (
    <List className={classes.pswContainer} alignItems="flex-start">
      {pswArr.map((psw, index) => (
        <Psw psw={psw} key={index} />
      ))}
    </List>
  );
}

const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PswContainer);
