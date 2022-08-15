import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../../mui_theme/theme";
import { InputAdornment, OutlinedInput, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        // bgcolor: "yellow",
        flexWrap: { xs: "wrap-reverse", md: "nowrap" },
        width: { xs: "100%" },
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          minWidth: { xs: "100%", md: 600 },
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{}}
        >
          <Tab
            sx={{
              "&.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "#fff",
              },
            }}
            label="Home"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "#fff",
              },
            }}
            label="Products and Services"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "#fff",
              },
            }}
            label="About Us"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <OutlinedInput
        startAdornment={
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        }
        fullWidth
        placeholder="Enter Product Name / Services"
      />
      <Paper
        sx={{
          // alignSelf: "end",
          // justifyContent: "flex-end",
          display: "flex",
          border: "1px solid grey",
          height: "100%",
          p: 1.9,
          gap: 2,
          width: "100%",
          maxWidth: 200,
        }}
        variant="outlined"
      >
        <CallIcon />
        <Typography textAlign="center"> Call 3848388291</Typography>
      </Paper>
    </Box>
  );
}
