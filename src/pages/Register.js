import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blok from "../assets/blok.png";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a color="inherit" target="_blank" href="https://github.com/omerfdasar">
        <code>{"<Omer/>"}</code>
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Register() {
  const theme = createTheme();
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
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    createUser(enteredEmail, enteredPassword, navigate);
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    console.log(emailIsValid);
    if (emailIsValid === false || passwordIsValid === false) {
      toast.warn(" Please enter a valid name or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
              m: 4,
              width: "340px",
              height: "220px",
            }}
          >
            <img src={blok} alt="blokImg" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
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
              autoFocus
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
              sx={{ mt: 3, mb: 1 }}
            >
              Register
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
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
