import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { callData } from "../helpers/firebase";
import errorGif from "../assets/loading.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
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
          <main>
            <Container sx={{ py: 5 }} maxWidth="xlg" >
              <Grid container spacing={8} sx={{ px: 4 }} columnSpacing={{ xs: 1, sm: 6, md: 8 }}>
                {blogsDash?.map((item) => (
                  <Grid item key={item.id} xs={12} sm={6} md={3}>
                    <BlogCard item={item} key={item.id} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Dashboard;
