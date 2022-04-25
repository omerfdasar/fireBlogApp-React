import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
const PrivateRouter = () => {
  let location = useLocation();
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default PrivateRouter;
