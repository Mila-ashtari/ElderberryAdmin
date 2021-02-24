import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Divider, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsw } from "../../actions";
import Psw from "../pswTab/Psw";

const useStyles = makeStyles((theme) => ({
  pswContainer: {
    padding: "20px",
  },
  listHeader: {
    display: "flex",
    // justifyContent:'space-between'
  },
  id:{
    width:'20%',
    margin:'0px 20px'

  },
  firstName:{
    width:'10%',
    margin:'0px 20px'
  }, 
  lastName:{
    width:'10%',
    margin:'0px 20px'
  }
}));

function PswContainer(props) {
  const classes = useStyles();
  const { getPsw, pswArr } = props;
  useEffect(() => {
    getPsw();
  }, [getPsw]);
  return (
    <List className={classes.pswContainer}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName} >Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider/>
      {pswArr.map((psw) => (
        <Psw psw={psw} key={psw.id} />
      ))}
    </List>
  );
}


const mapStateToProps = (state) => {
  return { pswArr: state.pswData };
};
export default connect(mapStateToProps, { getPsw })(PswContainer);
