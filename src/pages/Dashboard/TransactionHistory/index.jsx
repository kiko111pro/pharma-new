import React from "react";
import ResponsiveDrawer from "../Drawer/Drawer";
import DrawerWrapper from "../../../components/layout/DashboardWrapper";
import HistoryTable from "../HistoryTable";

function History() {
  return (
    <ResponsiveDrawer>
      <DrawerWrapper>
        <HistoryTable />
      </DrawerWrapper>
    </ResponsiveDrawer>
  );
}

export default History;
