import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthContext } from "../contexts/AuthContext";
import chicken from "../assets/16627.jpg";
export default function Profile() {
  let { currentUser } = React.useContext(AuthContext);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CssBaseline />
          <Card sx={{ display: "flex", height: "10rem" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={chicken}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {currentUser.displayName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {currentUser.email}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
