import React from "react";
import {
  Stack,
  Paper,
  Box,
  Grid,
  OutlinedInput,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { colors } from "../../../mui_theme/theme";
import AlternateCard from "../../../components/AlternateContentCard";
import ResponsiveDrawer from "../Drawer/Drawer";
import { certificate } from "../../../assets/images";
import ProductPaper from "./ProductPaper";
import BasicTable from "./Table";
function General() {
  return (
    <ResponsiveDrawer>
      <DashboardWrapper>
        <Grid container spacing={1} columnSpacing={2}>
          <Grid item xs={12} md={9}>
            <Stack gap={1}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack>
                  <Typography sx={{ fontWeight: 700, fontSize: 30 }}>
                    Edit Profile
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },

                      gap: 1,
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "flex-start",

                      my: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        width: "30%",
                        fontSize: 18,
                        fontWeight: 600,
                        color: colors.primary,
                        // alignSelf: "start",
                        // bgcolor: "red",
                      }}
                    >
                      Name
                    </Typography>
                    <OutlinedInput placeholder="Company name" fullWidth />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },

                      gap: 1,
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "flex-start",

                      my: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        width: "30%",
                        fontSize: 18,
                        fontWeight: 600,
                        color: colors.primary,
                      }}
                    >
                      About Us
                    </Typography>
                    <OutlinedInput
                      placeholder="Company name"
                      fullWidth
                      multiline
                      rows={5}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },

                      gap: 1,
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "flex-start",

                      my: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        width: "30%",
                        fontSize: 18,
                        fontWeight: 600,
                        color: colors.primary,
                      }}
                    >
                      Cerificates
                    </Typography>
                    <Paper sx={{ width: "100%", p: 2 }} variant="outlined">
                      <Stack gap={1}>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          <img src={certificate} alt="certi" />
                          <img src={certificate} alt="certi" />
                          <img src={certificate} alt="certi" />
                          <img src={certificate} alt="certi" />
                        </Box>
                        <Button
                          sx={{ maxWidth: "fit-content" }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Stack>
                    </Paper>
                  </Box>
                </Stack>
              </Paper>
              <ProductPaper />
            </Stack>
          </Grid>
          <Grid
            item
            alignContent="flex-start"
            spacing={1}
            container
            xs={12}
            md={3}
          >
            <Grid gap={2} item xs={12} sm={6} md={12}>
              <AlternateCard title="Subscription Plan">
                <Stack>
                  <Typography
                    sx={{
                      fontSize: 24,
                      color: colors.primary,
                      fontWeight: 500,
                    }}
                  >
                    Gold Plan
                  </Typography>
                  <Typography variant="subtitle2">
                    (Subscription ending on 02 Sept 2022)
                  </Typography>
                </Stack>
              </AlternateCard>{" "}
            </Grid>
            <Grid xs={6} md={12} item>
              <AlternateCard title="Total Leads" right={"39"} />
            </Grid>
            <Grid xs={6} md={12} item>
              <AlternateCard title="Leads Received Today" right={"04"} />
            </Grid>
            <Grid xs={12} md={12} item>
              <Paper sx={{ width: "100%", p: 1 }}>
                <Typography sx={{ fontWeight: 500, fontSize: 26 }}>
                  Recent Leads
                </Typography>

                <BasicTable />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </DashboardWrapper>
    </ResponsiveDrawer>
  );
}

export default General;
