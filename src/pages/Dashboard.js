import BlogCard from "../components/BlogCard";
import { callData } from "../helpers/firebase";
import errorGif from "../assets/loading.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
const Dashboard = () => {
  const { isLoading, blogsDash } = callData();
  // console.log(blogsDash);
  const theme = createTheme();

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
