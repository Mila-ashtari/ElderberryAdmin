import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
  Grid,
  TextField
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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
  searchBar: {
    padding: "20px",
  },
  gridContainer:{
    justifyContent:"flex-end"
  }
}));

function UserList({ users, type }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const dynamicUserList = users.filter(
    (user) =>
      user.id.includes(searchTerm) ||
      user.user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <div className={classes.searchBar}>
        <Grid container spacing={1} alignItems="flex-end" className={classes.gridContainer}>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="search" label="search" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          </Grid>
        </Grid>
      </div>
      <List className={classes.userContainer}>
        <ListItem className={classes.listHeader} disabled>
          <Typography className={classes.id}>ID</Typography>
          <Typography className={classes.lastName}>Last Name</Typography>
          <Typography className={classes.firstName}>First Name</Typography>
        </ListItem>
        <Divider />
        {dynamicUserList.map((item) => {
          const { firstName, lastName } = item.user ? item.user : item;
          return (
            <Fragment key={item.id}>
              <ListItem
                button
                className={classes.listItem}
                component={Link}
                to={`/${type}/${item.id}`}
                target="_blank"
                rel="noopener"
              >
                <ListItemText
                  className={classes.flexContainer}
                  disableTypography
                >
                  <Typography className={classes.id}>ID</Typography>
                  <Typography className={classes.lastName}>
                    {lastName}
                  </Typography>
                  <Typography className={classes.firstName}>
                    {firstName}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
}

export default UserList;
