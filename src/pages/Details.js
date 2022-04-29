import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as React from "react";

import Typography from "@mui/material/Typography";
import { Box, Button, Container, CssBaseline, Stack } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { deleteBlog } from "../helpers/firebase";
import loadingGif from "../assets/loading.gif";
import chicken from "../assets/16627.jpg";
const Details = ({ item }) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const eachBlog = location.state.item;
  console.log(eachBlog);

  const { currentUser } = React.useContext(AuthContext);

  const deleteHandler = () => {
    deleteBlog(params.id);
    navigate("/");
  };

  const editHandler = () => {
    navigate(`/update/${params.id}`, { state: { eachBlog } });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        mb: 7,
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
            src={eachBlog.image}
            alt="headerImage"
            style={{
              width: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = chicken;
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

          {currentUser.displayName === eachBlog.user && (
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
          )}
        </Container>
      )}
    </Box>
  );
};

export default Details;
