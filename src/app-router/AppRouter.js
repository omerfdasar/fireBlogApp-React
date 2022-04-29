import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";
import LoggedInRouter from "../app-router/LoggedInRouter";
import UpdateBlog from "../pages/UpdateBlog";
import Footer from "../components/Footer.js";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<LoggedInRouter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
