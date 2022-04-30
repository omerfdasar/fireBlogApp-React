import { createContext, useState } from "react";

export const BlogContext = createContext();

const initialBlog = {
  title: "",
  image: "",
  context: "",
  user: "",
  published_date: "",
};

const BlogContextProvider = (props) => {
  const [blog, setBlog] = useState(initialBlog);

  return (
    <BlogContext.Provider value={{ blog, setBlog, initialBlog }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
