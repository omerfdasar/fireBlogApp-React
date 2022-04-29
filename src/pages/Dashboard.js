import BlogCard from "../components/BlogCard";
// import { callData } from "../helpers/firebase";
import errorGif from "../assets/loading.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
const Dashboard = () => {
  // console.log(blogsDash);
  const theme = createTheme();

  const [isLoading, setIsLoading] = useState();
  const [blogsDash, setBlogsDash] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const blogRef = ref(db, "blog");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const dataList = [];

      // i can also use shallow copy as using spread
      for (let id in data) {
        dataList.push({ id, ...data[id] });
      }
      setBlogsDash(dataList);
      setIsLoading(false);
    });
  }, []);

  // return { isLoading, blogsDash };

  // const { isLoading, blogsDash } = callData();
  return (
    <div>
      <Typography sx={{ color: "#046582", textAlign: "center", fontSize: 40 }}>
        ───Dashboard───
      </Typography>
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
