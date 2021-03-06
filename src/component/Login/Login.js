/* eslint-disable */

import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    height: "100vh",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& #login-heading": {
      color: "#fff",
    },
  },
  loginContainer: {
    backgroundColor: "#212121",
    borderRadius: "5px",
    width: "100%",
    padding: "2rem",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
  fieldLabel: {
    fontSize: "18px !important",
    color: "#fff !important",
    margin: "0.5rem 0 !important",
  },
  fieldContainer: {
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "rgba(255,255,255,0.4) !important",
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "rgba(255,255,255,0.4) !important",
      },
  },
  textField: {
    padding: "10px !important",
    color: "#fff !important",
  },
  submitBtn: {
    backgroundColor: "#fff !important",
    border: "none !important",
    color: "#212121 !important",
    width: "150px",
  },
  divider: {
    backgroundColor: "#fff !important",
    width: "70px",
    padding: "1px",
    margin: "0 auto",
  },
}));

const Login = () => {
  const classes = useStyles();

  // manage form state
  const [qaariCredentials, setQaariCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "Testing",
    isError: true,
  });
  return (
    <Container maxWidth="sm" className={classes.root}>
      <div className={classes.loginContainer}>
        <Typography
          variant="h4"
          align="center"
          color="initial"
          id="login-heading"
        >
          Qaari Login
        </Typography>
        <Box display="flex" my={2} justifyContent="center">
          <Divider className={classes.divider} />
        </Box>
        <form className={classes.form}>
          {error.isError && (
            <MuiAlert icon={false} severity="error">
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Typography variant="body2" color="initial">
                  {error.message}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={() => {
                    setError({
                      message: "",
                      isError: false,
                    });
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </MuiAlert>
          )}
          <FormControl fullWidth className={classes.fieldContainer}>
            <FormLabel className={classes.fieldLabel}>Email</FormLabel>
            <TextField
              id="qaari-email"
              placeholder="Type your email"
              inputProps={{ className: classes.textField }}
              value={qaariCredentials.email}
              onChange={(e) =>
                setQaariCredentials({
                  ...qaariCredentials,
                  email: e.target.value,
                })
              }
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl fullWidth className={classes.fieldContainer}>
            <FormLabel className={classes.fieldLabel}>Password</FormLabel>
            <TextField
              id="qaari-password"
              type="password"
              placeholder="Type your password"
              inputProps={{ className: classes.textField }}
              value={qaariCredentials.password}
              onChange={(e) =>
                setQaariCredentials({
                  ...qaariCredentials,
                  password: e.target.value,
                })
              }
            />
            <FormHelperText></FormHelperText>
          </FormControl>

          <Box my={2} display="flex" justifyContent="center">
            <Button
              variant="outlined"
              className={classes.submitBtn}
              type="submit"
              size="large"
            >
              Login
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default Login;
