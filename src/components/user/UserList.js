import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
  useRadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  userContainer: {
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

function UserList({ users, type }) {
  const classes = useStyles();
  return (
    <List className={classes.userContainer}>
      <ListItem className={classes.listHeader} disabled>
        <Typography className={classes.id}>ID</Typography>
        <Typography className={classes.lastName}>Last Name</Typography>
        <Typography className={classes.firstName}>First Name</Typography>
      </ListItem>
      <Divider />
      {users.map((item) => {
        const { user, id } = item;
        return (
          <Fragment key={id}>
            <ListItem
              button
              className={classes.listItem}
              component={Link}
              to={`/${type}/${id}`}
              target="_blank"
              rel="noopener"
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
          </Fragment>
        );
      })}
    </List>
  );
}

export default UserList
