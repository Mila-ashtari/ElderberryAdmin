import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { logIn } from "../actions";

const useStyles = makeStyles((theme) => ({
  login: {
    margin: "0 auto",
    height: "100vh",
    padding: "50px",
    backgroundColor: theme.palette.primary.main,
  },
  formContainer: {
    border: " solid rgb(241, 238, 232) 1px",
    borderRadius: "1%",
    width: "50% ",
    maxWidth: "400px",
    minWidth: "250px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f7f3f3",
    padding: "30px",
  },
  h2: {
    marginTop: 0,
  },
  textField: {
    display: "block",
    width: "80%",
    margin: "5px auto 15px auto",
    textAlign: "center",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
  },
  button: {
    marginTop: "25px",
  },
}));

function Login(props) {
  const classes = useStyles();
  const { logIn, history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn("username", "password", () => {
      history.push("/dashboard");
    });
  };
  return (
    <section className={classes.login}>
      <Box className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={classes.h2}>Sign in</h2>
          <label>Your email address:</label>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="email"
            fullWidth
            required
            autoComplete="true"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="password"
            fullWidth
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Box>
    </section>
  );
}

const mapStateTopProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateTopProps, { logIn })(Login);
