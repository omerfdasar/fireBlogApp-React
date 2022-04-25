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
  const validationHandler = () => {
    currentUser
      ? navigate("/details" + id)
      : toast("Please log in to see details");
  };
  console.log(item, "Blogcard14");
  return (
    // <div onClick={validationHandler}>
    //   <h3>1</h3>
    //   <h3>2</h3>
    //   {currentUser && <h3>om33er</h3>}
    //   <h3>4</h3>
    // </div>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography>{item.content}.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
