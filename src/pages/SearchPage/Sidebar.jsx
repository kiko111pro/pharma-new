import { Typography, Stack, ButtonBase } from "@mui/material";
import React from "react";
import { colors } from "../../mui_theme/theme";
import { sidebarData } from "./dummyFilters";

function Sidebar({ selectedFilters, setSelectedFilters }) {
  const handleRemoveFilter = (item) => {
    const filtered = selectedFilters.filter((ele) => ele !== item);
    setSelectedFilters(filtered);
  };

  const handleAddFilter = (child) => {
    console.log("Inside ADd");
    if (selectedFilters.includes(child)) {
      console.log("Inside Includes");
      handleRemoveFilter(child);
      return;
    }
    setSelectedFilters([...selectedFilters, child]);
  };

  return (
    <Stack sx={{ gap: 2 }}>
      {sidebarData.map((item, idx) => (
        <Stack sx={{ bgcolor: "#fff" }}>
          <Typography
            sx={{
              bgcolor: "#d9d9d9",
              py: 1,
              textAlign: "center",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {item.title}
          </Typography>
          {item.items.map((child, id) => {
            const selected = selectedFilters.includes(child);
            return (
              <ButtonBase
                onClick={() => handleAddFilter(child)}
                key={`${id}${child.trim()}`}
              >
                <Typography
                  sx={{
                    my: `0.2rem`,
                    py: `0.4rem`,
                    width: "100%",
                    textAlign: "left",
                    fontsize: 18,
                    px: 2,
                    bgcolor: selected && colors.secondary,
                    color: selected && "#fff",
                  }}
                >
                  {child}
                </Typography>
              </ButtonBase>
            );
          })}
        </Stack>
      ))}
    </Stack>
  );
}

export default Sidebar;
