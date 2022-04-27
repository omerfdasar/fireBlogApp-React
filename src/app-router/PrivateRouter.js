import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
const PrivateRouter = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  if (!currentUser) {
    toast.warning("Please log in to see details");
    console.log("ss");
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRouter;
