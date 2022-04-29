import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { callData } from "../helpers/firebase";
import errorGif from "../assets/loading.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
const Dashboard = () => {
  // const [blog, setBlog] = useState([]);
  const { isLoading, blogsDash } = callData();
  // console.log(blogsDash);
  const theme = createTheme();

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoading ? (
        <div className="error">
          <img src={errorGif} />
        </div>
      ) : blogsDash?.length === 0 ? (
        <h1>DATA NOT FOUND</h1>
      ) : (
        <ThemeProvider theme={theme}>
          <Box
            xs={{ d: "flex" }}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            {blogsDash?.map((item) => (
              <BlogCard item={item} key={item.id} />
            ))}
          </Box>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Dashboard;
