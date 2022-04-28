import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function FeaturedPost(props) {
  const post = {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card withThis is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with  supporting text below as a natural lead-in wider card withThis is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with  supporting text below as a natural lead-in wider card withThis is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with This is a wider card with  supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  };
  console.log(post);
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", maxHeight: 300 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={"https://picsum.photos/200/300"}
          />
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              aaaa
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              date
            </Typography>
            <Typography variant="subtitle1" paragraph>
              description
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={"https://picsum.photos/200/300"}
          />
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              aaaa
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              date
            </Typography>
            <Typography variant="subtitle1" paragraph>
              description
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={"https://picsum.photos/200/300"}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
