import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

const initialBlog = { title: "", image: "", context: "" };

const BlogContextProvider = (props) => {
  const [blog, setBlog] = useState(initialBlog);

 /*  useEffect(() => {
    getBlog(setBlog);
  }); */

  return (
    <BlogContext.Provider value={{ blog }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
