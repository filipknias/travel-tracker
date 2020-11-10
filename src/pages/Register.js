import React, { useRef } from "react";
import { Link } from "react-router-dom";
// Material UI
import "fontsource-rajdhani";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Images
import LogoImage from "../img/logo.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      border: 0,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    marginRight: 20,
  },
  logoHeader: {
    fontFamily: "rajdhani",
  },
  formInput: {
    marginBottom: "25px",
  },
  formHeader: {
    margin: "30px 0px 20px 0px",
    textAlign: "center",
  },
  buttonsGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
}));

const Register = () => {
  const classes = useStyles();
  // Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <Paper className={classes.paper} variant="outlined">
      <div className={classes.headerContainer}>
        <img
          src={LogoImage}
          height="40"
          className={classes.logoImage}
          alt="logo"
        />
        <Typography variant="h4" className={classes.logoHeader}>
          Travel-Tracker
        </Typography>
      </div>
      <Typography variant="h5" className={classes.formHeader}>
        Create new account
      </Typography>
      <form>
        <TextField
          variant="outlined"
          id="email"
          type="email"
          label="Adress e-mail"
          className={classes.formInput}
          ref={emailRef}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          id="password"
          type="password"
          label="Password"
          className={classes.formInput}
          ref={passwordRef}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          id="confirm-password"
          type="password"
          label="Confirm Password"
          className={classes.formInput}
          ref={confirmPasswordRef}
          required
          fullWidth
        />
        <div className={classes.buttonsGroup}>
          <Link to="/login">
            <Button type="button" color="primary">
              Sign In
            </Button>
          </Link>
          <Button
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Register;