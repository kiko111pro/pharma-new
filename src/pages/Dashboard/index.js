import { Routes, Route } from "react-router-dom";
// import ResponsiveDrawer from "./Drawer/Drawer";
import React from "react";
import ProductManagement from "./ProductManagement";
import General from "./General";
// import Subscriptions from "./Subscriptions";
function Dashboard() {
  return (
    <>
      {/* <ResponsiveDrawer> */}
      <Routes>
        <Route exact path="/" element={<General />} />
        <Route
          exact
          path="/product-management"
          element={<ProductManagement />}
        />
        <Route
          exact
          path="/subscription"
          element={
            <div style={{ backgroundColor: "red", width: "100vh" }}>r</div>
          }
        />
      </Routes>
      {/* </ResponsiveDrawer> */}
    </>
  );
}

export default Dashboard;
