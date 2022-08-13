import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { BusinessCenterIcon } from "@mui/icons-material";

function CustomFact() {
  return (
    <Stack>
      <Avatar>
        <BusinessCenterIcon />
      </Avatar>
      <Typography>Nature of Business</Typography>
      <Typography variant="subtitle1">Manufacturer</Typography>
    </Stack>
  );
}

export default CustomFact;
