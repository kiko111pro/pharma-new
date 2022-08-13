import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import ResponsiveDrawer from "../Drawer/Drawer";
import { Stack, Box, Paper } from "@mui/material";
import AlternateCard from "../../../components/AlternateContentCard";
import Table from "../Table";
function LeadManagement() {
  return (
    <ResponsiveDrawer>
      <DashboardWrapper>
        <Stack>
          <Box display="flex" gap={2}>
            <AlternateCard title="Total Leads" right={"39"} />
            <AlternateCard title="Leads Received Today" right={"04"} />
          </Box>
          <Paper sx={{ mt: 2 }}>
            <Table />
          </Paper>
        </Stack>
      </DashboardWrapper>
    </ResponsiveDrawer>
  );
}

export default LeadManagement;
