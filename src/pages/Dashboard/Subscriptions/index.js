import { Stack } from "@mui/material";
import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import ResponsiveDrawer from "../Drawer/Drawer";
import SubscriptionCard from "./SubscriptionCard";
function Subscriptions() {
  return (
    <ResponsiveDrawer>
      <DashboardWrapper>
        <Stack gap={2}>
          <SubscriptionCard
            active
            price={499}
            plan="Bronze Plan"
            planDetails="(Subscription ending on 02 Sept 2022)"
          />
          <SubscriptionCard
            plan="Gold Plan"
            price={999}
            planDetails="(Get more features and higher priority in search results)"
          />
          <SubscriptionCard
            plan="Silver Plan"
            price={799}
            planDetails="(Get more features than Bronze Plan)"
          />
        </Stack>
      </DashboardWrapper>
    </ResponsiveDrawer>
  );
}

export default Subscriptions;
