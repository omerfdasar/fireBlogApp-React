import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { callData, deleteBlog } from "../helpers/firebase";

const Details = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const eachBlog = location.state.item;
  // console.log(params.id, "paa");
  console.log(eachBlog);

  const { currentUser } = React.useContext(AuthContext);

  //   useEffect(() => {
  //     fetch(".../id");
  //   }, []);
  const deleteHandler = () => {
    deleteBlog(params.id);
    navigate("/");
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {eachBlog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {eachBlog.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="small" /* onClick={editHandler} */>Edit</Button>
          <Button size="small" onClick={deleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Details;
