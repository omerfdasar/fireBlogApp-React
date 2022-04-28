import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { deleteBlog } from "../helpers/firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import chicken from "../assets/16627.jpg";

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
      <CardActionArea onClick={validationHandler}>
        <CardMedia
          sx={{ width: 1 }}
          component="img"
          // height="70px"
          image={chicken}
          // defaultValue={chicken}
          alt="green iguana"
        />
        <CardContent
          sx={{
            flexGrow: 1,
            backgroundColor: "#E7E6F5",
            minHeight: 150,
            maxHeight: 200,

            overflow: "hidden",
            // textOverflow: "ellipsis"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="title"
            style={{ color: "cornflowerblue" }}
          >
            {item.title}
          </Typography>
          <Typography>{item.content}.</Typography>
        </CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          <div className="IconMail">
            {<AccountCircleIcon sx={{ mx: 3 / 5, alignSelf: "center" }} />}
            {item.user}
          </div>
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
