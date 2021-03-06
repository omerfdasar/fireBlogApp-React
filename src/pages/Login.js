import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blok from "../assets/blok.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn, signUpProvider } from "../helpers/firebase";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a href="https://github.com/omerfdasar" target="_blank" rel="noreferrer">
        <code>{"<Omer/>"}</code>
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  // states
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  // functions
  const validateEmailHandler = () => {
    setEmailIsValid(
      enteredEmail.includes("@") &&
        enteredEmail.includes(".") &&
        enteredEmail.trim().length > 5
    );
    console.log(emailIsValid);
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 5);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(enteredEmail, enteredPassword, navigate);

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(userData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 5,
              width: "340px",
              height: "220px",
            }}
          >
            <img src={blok} alt="blogImage" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onBlur={validateEmailHandler}
              onChange={emailChangeHandler}
              style={
                !emailIsValid
                  ? { backgroundColor: "#fbdada" }
                  : { backgroundColor: "#fff" }
              }
            />
            {!emailIsValid && (
              <p
                style={{
                  textAlign: "flex-start",
                  fontSize: "smaller",
                  color: "red",
                }}
              >
                Valid emails consist of "@" and "." and minimum 6 characters
              </p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              style={
                !passwordIsValid
                  ? { backgroundColor: "#fbdada" }
                  : { backgroundColor: "#fff" }
              }
            />
            {!passwordIsValid && (
              <p
                style={{
                  textAlign: "flex-start",
                  fontSize: "smaller",
                  color: "red",
                }}
              >
                Valid passwords consist minimum 6 characters
              </p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleProviderLogin}
            >
              Continue With Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"/register"}>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to={"/register"}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 10, mb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
