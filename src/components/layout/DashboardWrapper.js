import React from "react";
import { Stack, Container } from "@mui/material";

function DashboardWrapper({ children }) {
  return (
    <Stack
      sx={{
        bgcolor: "#f5f5f5",
        height: "90vh",
        overflow: "scroll",
        py: 2,
      }}
    >
      <Container sx={{ marginLeft: 0 }}>{children}</Container>
    </Stack>
  );
}

export default DashboardWrapper;
