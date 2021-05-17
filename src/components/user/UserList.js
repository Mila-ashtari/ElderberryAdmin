import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
  ListItemText,
  Grid,
  TextField,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
  flexContainer: {
    display: "flex",
  },
  flexItem: {
    width: "20%",
    margin: "0px 20px",
  },
  userContainer: { paddingBottom: "0" },
  searchBar: {
    padding: "20px",
  },
  gridContainer: {
    justifyContent: "flex-end",
  },
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
    <section className={classes.container}>
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        className={classes.gridContainer}
      >
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField
            id="search"
            label="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Grid>
      </Grid>

      <List className={classes.userContainer} component={Paper}>
        <ListItem className={classes.flexContainer} disabled>
          <Typography className={classes.flexItem}>ID</Typography>
          <Typography className={classes.flexItem}>Last Name</Typography>
          <Typography className={classes.flexItem}>First Name</Typography>
        </ListItem>
        <Divider />
        {dynamicUserList.map((user) => {
          const { firstName, lastName } = user;
          return (
            <Fragment key={user.id}>
              <ListItem
                button
                className={classes.listItem}
                component={Link}
                to={`/${type}/${user.id}`}
                target="_blank"
                rel="noopener"
              >
                <ListItemText
                  className={classes.flexContainer}
                  disableTypography
                >
                  <Typography className={classes.flexItem}>ID</Typography>
                  <Typography className={classes.flexItem}>
                    {lastName}
                  </Typography>
                  <Typography className={classes.flexItem}>
                    {firstName}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </section>
  );
}

export default UserList;
