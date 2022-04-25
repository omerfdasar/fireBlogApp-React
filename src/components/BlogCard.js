import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const BlogCard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const validationHandler = () => {
    currentUser
      ? navigate("/details" + id)
      : toast("Please log in to see details");
  };
  return (
    <div onClick={validationHandler}>
      <h3>1</h3>
      <h3>2</h3>
      {currentUser && <h3>om33er</h3>}
      <h3>4</h3>
    </div>
  );
};

export default BlogCard;
