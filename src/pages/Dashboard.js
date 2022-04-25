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
 
  const theme = createTheme();

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoading ? (
        <div>
          <img src={errorGif} />
        </div>
      ) : blogsDash?.length === 0 ? (
        <h1>DATA NOT FOUND</h1>
      ) : (
        <ThemeProvider theme={theme}>
          <main>
            <Container sx={{ py: 0 }} maxWidth="xlg">
              <Grid container spacing={10} sx={{ px: 5 }}>
                {blogsDash?.map((item, index) => (
                  <Grid item key={item.id} xs={12} sm={4} md={3}>
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
