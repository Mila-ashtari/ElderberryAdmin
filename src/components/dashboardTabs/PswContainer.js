import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getPsws } from "../../actions/psw";
import Psw from "../psw/Psw";
import { Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pswContainer: {
    padding: "20px",
  },
  listHeader: {
    display: "flex",
    // justifyContent:'space-between'
  },
  flexContainer: {
    display: "flex",
  },
  id: {
    width: "20%",
    margin: "0px 20px",
  },
  firstName: {
    width: "10%",
    margin: "0px 20px",
  },
  lastName: {
    width: "10%",
    margin: "0px 20px",
  },
}));

function PswContainer(props) {
  const classes = useStyles();
  const { getPsws, psws } = props;
  useEffect(() => {
    getPsws();
  }, [getPsws]);
  return (
    <List className={classes.pswContainer}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName}>Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider />
      {/* {psws.map((psw) => (
        <Psw psw={psw} key={psw.id} />
      ))} */}
      {psws.map((psw) => {
        const { user, id } = psw;
        return (
          <>
            <ListItem
              button
              className={classes.listItem}
              key={id}
              component={Link}
              to={`/psw/${id}`}
              target="_blank"
            >
              <ListItemText className={classes.flexContainer} disableTypography>
                <Typography className={classes.id}>ID</Typography>
                <Typography className={classes.lastName}>
                  {user.lastName}
                </Typography>
                <Typography className={classes.firstName}>
                  {user.firstName}
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}

const mapStateToProps = (state) => {
  return { psws: Object.values(state.psws) };
};
export default connect(mapStateToProps, { getPsws })(PswContainer);
