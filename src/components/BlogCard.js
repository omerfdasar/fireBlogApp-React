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
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { pink } from "@mui/material/colors";

const BlogCard = ({ item }) => {
  const { currentUser } = useContext(AuthContext);
  const { editHandler } = useContext(BlogContext);
  const navigate = useNavigate();
  const validationHandler = () => {
    currentUser
      ? navigate(`/details/${item.id}`, { state: { item } })
      : toast.warning("Please log in to see details");
  };
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };
  // console.log(item);
  // console.log(currentUser);
  return (
    <Card
      sx={{
        // height: "100%",
        // display: "flex",
        // flexDirection: "column",
        // minWidth: 250,
        // maxWidth: 350,
        // m: 5,
        // maxHeight: 700,
        width: 345,
        m: 5,
        maxHeight: 700,
      }}
    >
      <CardActionArea onClick={validationHandler}>
        <CardMedia
          sx={{ /* width: 1, */ minHeight: 250, maxHeight: 320 }}
          component="img"
          // height="70px"
          image={item.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = chicken;
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            backgroundColor: "#E7E6F5",
            height: 300,
          }}
        >
          <Typography variant="overline" align="left">
            <div className="IconMail">
              <i>Author : {item?.user}</i>
            </div>
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="title"
            style={{ color: "cornflowerblue" }}
          >
            {item.title}
          </Typography>
          <Typography>
            {truncateOverview(item?.content, 250) ??
              "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
          <CardActions
            style={{
              justifyContent: "center",
              alignSelf: "end",
              alignContent: "flex-end",
            }}
          >
            <Button>
              <FavoriteIcon sx={{ color: pink[500] }} />
            </Button>
            <Button>
              <AddCommentIcon color="action" />
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
