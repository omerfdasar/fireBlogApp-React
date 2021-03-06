import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    toast.warning("Please log in to see details");
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRouter;
