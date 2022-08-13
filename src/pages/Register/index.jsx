import React from "react";
import Banner from "./Banner";
import {
  Typography as Text,
  Stack,
  Container,
  Paper,
  Grid,
  Box,
  Button,
  OutlinedInput,
} from "@mui/material";
import { meds } from "../../assets/images";
import { colors } from "../../mui_theme/theme";
function Register() {
  return (
    <Stack gap={3}>
      <Banner />
      <Container maxWidth="lg">
        <Paper sx={{ width: "100%" }}>
          <Grid container>
            <Grid item container sx={{ p: 5 }} spacing={2} xs={12} md={8}>
              <Grid item xs={12} sm={6}>
                <OutlinedInput placeholder="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput placeholder="LAst name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput placeholder="Phone Number" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput placeholder="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput placeholder="Address" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <OutlinedInput placeholder="Account type" fullWidth />
              </Grid>
              <Box sx={{ width: "100%", mt: 10 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" sx={{ width: "100%" }}>
                      Verify Phone Number
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" sx={{ width: "100%" }}>
                      Verify Email
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" sx={{ width: "100%" }}>
                      Verify KYC
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={0} md={4}>
              <Stack sx={{ bgcolor: colors.primary, px: 3, pt: 4 }}>
                <Text
                  sx={{
                    fontSize: 40,
                    fontWeight: 800,
                    textAlign: "right",
                    color: "#fff",
                  }}
                >
                  The largest B2B pharmaceutical products marketplace
                </Text>
                <img src={meds} alt="meds" />
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Stack>
  );
}

export default Register;
