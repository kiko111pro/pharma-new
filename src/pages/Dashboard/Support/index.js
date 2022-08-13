import React from "react";
import ResponsiveDrawer from "../Drawer/Drawer";
import DrawerWrapper from "../../../components/layout/DashboardWrapper";
import { Typography, Paper, Stack, Box } from "@mui/material";
import SearchInput from "../../../components/SearchInput";
import Accordions from "./Accordions";
import ContactCard from "./ContactCard";
import { colors } from "../../../mui_theme/theme";
function Support() {
  return (
    <ResponsiveDrawer>
      <DrawerWrapper>
        <Paper sx={{ p: 2, maxWidth: 1000 }} variant="outlined">
          <Stack gap={2}>
            <Typography sx={{ fontSize: 30, fontWeight: 500 }}>
              Support
            </Typography>
            <Stack>
              <Typography
                sx={{ fontSize: 26, fontWeight: 500, color: colors.primary }}
              >
                How can we help you?
              </Typography>
              <SearchInput small />
            </Stack>
            <Accordions />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, my: 1 }}>
              <ContactCard info="+91-1818787181" title="WhatsApp" icon />
              <ContactCard info="business@gmail.com" title="Email Us" />
              <ContactCard info="88178188191, 7817818181" title="Call Us" />
            </Box>
          </Stack>
        </Paper>
      </DrawerWrapper>
    </ResponsiveDrawer>
  );
}

export default Support;
