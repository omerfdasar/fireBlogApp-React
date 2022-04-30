import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blok from "../assets/blok.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { addBlog } from "../helpers/firebase";
import { toast } from "react-toastify";

const NewBlog = () => {
  const { blog, setBlog, initialBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { email } = currentUser;

    setBlog({ ...blog, [name]: value, user: email, publishedDate: Date.now() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);

    addBlog(blog);
    setBlog(initialBlog);
    navigate("/");
    toast.success("New Blog was successfully added");
  };

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 5,
              width: "340px",
              height: "220px",
            }}
          >
            <img src={blok} alt="blokImage" />
          </Avatar>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image URL"
              type="text"
              id="image"
              value={blog.image}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="content"
              type="text"
              label="Content"
              id="content"
              multiline
              rows={10}
              value={blog.content}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              New Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NewBlog;
