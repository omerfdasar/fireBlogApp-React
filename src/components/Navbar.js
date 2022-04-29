import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import umbrella from "../assets/umbrella.png";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { deepOrange, green, yellow } from "@mui/material/colors";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    logOut(navigate);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 0, my: 0, display: { xs: "none", md: "flex" } }}
          >
            <Link to={"/"}>
              <img width="50px" src={umbrella} alt="logo" />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key={Math.trunc(Math.random() * 1000)}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <a href="https://github.com/omerfdasar" target="_blank">
                    GITHUB
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem
                key={Math.trunc(Math.random() * 1000)}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <a
                    href="https://omerfdasar.github.io/myBioPageWithSASS/"
                    target="_blank"
                  >
                    About ME
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to={"/"}>
              <code>{"<Omer/>"}</code>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                my: 2,
                mx: "auto",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to={"/"}>
                <code>{"<Omer/> Blog"}</code>
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {/* <p>{currentUser && currentUser?.displayName}</p> */}
            <Tooltip title="Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar
                  sx={{ bgcolor: green[500] }}
                  alt={currentUser && currentUser?.displayName.toUpperCase()}
                  src="/broken-image.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <div>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/profile"}>Profile</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/newblog"}>New Blog</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/"}>Dashboard</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Button onClick={logoutHandler}>Logout</Button>
                    </Typography>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/login"}>Login</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/register"}>Register</Link>
                    </Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
