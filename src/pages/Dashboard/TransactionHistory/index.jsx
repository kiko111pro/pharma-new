import React from "react";
import ResponsiveDrawer from "../Drawer/Drawer";
import DrawerWrapper from "../../../components/layout/DashboardWrapper";
import HistoryTable from "../HistoryTable";
import { Box } from "@mui/material";

function History() {
  return (
    <ResponsiveDrawer>
      <DrawerWrapper>
        <Box sx={{ width: { xs: "90vw", md: "100%" }, maxWidth: 1000, p: 2 }}>
          <HistoryTable />
        </Box>
      </DrawerWrapper>
    </ResponsiveDrawer>
  );
}

export default History;
