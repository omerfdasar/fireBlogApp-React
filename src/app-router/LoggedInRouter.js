import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const LoggedInRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, "priva");
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default LoggedInRouter;
