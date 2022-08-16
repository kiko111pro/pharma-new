import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import {
  MenuItem,
  Drawer,
  ListItem,
  Stack,
  List,
  Divider,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Auth from "../Auth";
import { useBoolean } from "../../../utils/hooks";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../mui_theme/theme";
const pages = [
  { page: "Home", path: "/" },
  { page: "Products", path: "/product" },
  { page: "Distributors", path: "/company" },
  { page: "Manufacturers", path: "/company" },
  { page: "About Us", path: "/about" },
  { page: "Blog", path: "/blog" },
];
const settings = ["Login", "Signup", "Profile", "Dashboard"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerState, setDrawer] = useBoolean(false);

  const [open, setOpen] = React.useState(false);
  const [isLogin, setLogin] = React.useState(true);
  const handleOpen = (e) => {
    setLogin(e === "login");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    navigate(path);
    setAnchorElNav(false);
  };

  const handleCloseUserMenu = (e, setting) => {
    console.log(setting);
    if (setting === "Profile") {
      navigate("/profile", { replace: true });
    } else if (setting === "Login") {
      handleOpen("login");
    } else if (setting === "Signup") {
      handleOpen("signup");
    } else if (setting === "Dashboard") {
      navigate("/dashboard/general");
    }

    setAnchorElUser(null);
  };

  const list = () => (
    <Box
      sx={{ width: "100vw", bgcolor: colors.primary, height: "100vh" }}
      role="presentation"
      onClick={setDrawer.off}
      onKeyDown={setDrawer.off}
    >
      <Stack sx={{ p: 2 }}>
        <Box>
          <IconButton>
            <CloseIcon color="action" />
          </IconButton>
        </Box>
        <List>
          {pages.map((page, i) => (
            <>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  py: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigate(page.path)}
              >
                {page.page}
              </ListItem>
              <Divider sx={{ bgcolor: "rgba(225, 218, 212, .3)" }} />
            </>
          ))}
        </List>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ height: "80px", px: "auto" }}>
        <Container maxWidth="xl" sx={{ my: "auto" }}>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pharma Emart
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={setDrawer.on}
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
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleCloseNavMenu(page.path)}
                  >
                    <Typography textAlign="right" xs={{ fontWeight: 400 }}>
                      {page.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Drawer
                anchor={"left"}
                open={drawerState}
                onClose={setDrawer.off}
              >
                {list()}
              </Drawer>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                //   fontFamily: "monospace",
                fontWeight: 600,
                //   letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pharma Emart
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "1.2rem",
                mx: 5,
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 400,
                    fontSize: 18,
                    //   gap: ".8rem",
                    cursor: "pointer",
                  }}
                >
                  {page.page}
                </Typography>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", gap: "2rem" }}>
              {/* <ButtonBase onClick={() => handleOpen("login")}>
                {" "}
                <Typography
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                >
                  Login
                </Typography>
              </ButtonBase> */}
              {/* <ButtonBase onClick={() => handleOpen("signin")}>
                {" "}
                <Typography
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                >
                  SignUp
                </Typography>
              </ButtonBase> */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={(e) => handleCloseUserMenu(e, setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Auth isLogin={isLogin} open={open} handleClose={handleClose} />
    </>
  );
};
export default ResponsiveAppBar;
