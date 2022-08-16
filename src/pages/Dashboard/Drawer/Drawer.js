import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InventoryIcon from "@mui/icons-material/Inventory";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HistoryIcon from "@mui/icons-material/History";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../../mui_theme/theme";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [pathLocation, setPathLocation] = React.useState("");
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // function getParam() {
  //     const arr = location.path
  //   return arr[arr.length - 1];
  // }

  React.useEffect(() => {
    const arr = location.pathname.split("/");
    const endP = arr[arr.length - 1];
    setPathLocation(endP);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // useEffect((

  // )=> {}, [location])

  const dashList = [
    {
      name: "General",
      icon: <ListAltIcon />,
      path: "general",
    },
    {
      name: "Product Management",
      icon: <InventoryIcon />,
      path: "product-management",
    },
    {
      name: "Lead Management",
      icon: <EqualizerIcon />,
      path: "lead-management",
    },
    {
      name: "Subscription Plan",
      icon: <DateRangeIcon />,
      path: "subscription",
    },
    {
      name: "Transaction History",
      icon: <HistoryIcon />,
      path: "transaction-history",
    },
    {
      name: "Support",
      icon: <SupportAgentIcon />,
      path: "support",
    },
  ];

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: "#d9d9d9" }}>
        <Typography variant="h6" sx={{ mx: "auto" }}>
          <strong>Dashboard</strong>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {dashList.map((item, id) => (
          <ListItem
            key={id}
            onClick={() => navigate(`/dashboard/${item.path}`)}
            sx={{
              bgcolor: pathLocation === item.path && colors.primary,
              color: pathLocation === item.path && colors.white,
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ color: pathLocation === item.path && colors.white }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#fff" }}>
      {/* <CssBaseline /> */}

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //   height: "80vh",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "relative",
              // height: "90vh",
              top: 0,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ m: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
