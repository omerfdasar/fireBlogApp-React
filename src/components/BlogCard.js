import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const BlogCard = ({ item }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let id = item.id;
  console.log(id);
  const validationHandler = () => {
    currentUser
      ? navigate("/details/" + id)
      : toast.warning("Please log in to see details");
  };
  console.log(item, "Blogcard14");
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          cursor: "pointer",
        }}
        image={"https://source.unsplash.com/random"}
        alt="random"
        onClick={validationHandler}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography>{item.content}.</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button size="small" onClick={validationHandler}>
          View
        </Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
