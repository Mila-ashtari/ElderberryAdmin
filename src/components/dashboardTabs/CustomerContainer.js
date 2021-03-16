import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Divider, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getCustomers } from "../../actions/customer";
import Customer from "../customer/Customer"

const useStyles = makeStyles((theme) => ({
  CustomerContainer: {
    padding: "20px",
  },
  listHeader: {
    display: "flex",
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

function CustomerContainer(props) {
  const classes = useStyles();
  const { getCustomers, customers } = props;
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);
  return (
    <List className={classes.CustomerContainer}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName} >Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider/>
      {customers.map((customer) => (
        <Customer customer={customer} key={customer.id} />
      ))}
    </List>
  );
}


const mapStateToProps = (state) => {
  return { customers: Object.values(state.customers)};
};
export default connect(mapStateToProps, { getCustomers })(CustomerContainer);
