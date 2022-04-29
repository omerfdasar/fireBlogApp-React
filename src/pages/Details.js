import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { callData, deleteBlog } from "../helpers/firebase";
import loadingGif from "../assets/loading.gif";
const Details = ({ item }) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  console.log(item);

  const eachBlog = location.state.item;
  // console.log(params.id, "paa");
  // console.log(eachBlog);

  const { currentUser } = React.useContext(AuthContext);

  const deleteHandler = () => {
    deleteBlog(params.id);
    navigate("/");
  };

  const editHandler = () => {
    navigate("/details/" + params.id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {eachBlog === undefined ? (
        <Container maxWidth="sm">
          <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
        </Container>
      ) : (
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {eachBlog.title}
          </Typography>
          <img
            src="https://source.unsplash.com/random"
            alt="headerImage"
            style={{
              width: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          />
          <Typography variant="overline" align="right">
            <i>
              Author : {eachBlog.user}
              {/* {moment(data[0]?.published_date).format("MMM DD, YYYY")} */}
            </i>
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{ textIndent: "3rem", marginTop: "2rem" }}
          >
            {eachBlog.content}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button size="small" onClick={editHandler}>
              Edit
            </Button>
            <Button size="small" onClick={deleteHandler}>
              Delete
            </Button>
          </Stack>
        </Container>
      )}
    </Box>
  );
};

export default Details;
