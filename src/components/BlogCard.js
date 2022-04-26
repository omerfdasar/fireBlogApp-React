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
import { BlogContext } from "../contexts/BlogContext";
import { deleteBlog } from "../helpers/firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BlogCard = ({ item }) => {
  const { currentUser } = useContext(AuthContext);
  const { editHandler } = useContext(BlogContext);

  const navigate = useNavigate();
  const validationHandler = () => {
    currentUser
      ? navigate(`/details/${item.id}`, { state: { item } })
      : toast.warning("Please log in to see details");
  };
  // console.log(item);
  // console.log(currentUser);
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
      <Typography gutterBottom variant="h5" component="h2">
        <div className="IconMail">
          {<AccountCircleIcon sx={{ mx: 1, alignSelf: "center" }} />}
          {item.user}
        </div>
      </Typography>
    </Card>
  );
};

export default BlogCard;
