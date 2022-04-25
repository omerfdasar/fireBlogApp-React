import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRouter;
