import React from "react";
import Banner from "../../components/BannerWithTitle";
import {
  Grid,
  Typography,
  Button,
  Box,
  Stack,
  Container,
  Paper,
} from "@mui/material";
import { landingWeb } from "../../assets/images";

const About = () => {
  return (
    <>
      <Banner title={"About Us"} />
      <Container>
        <Paper sx={{ gap: 2, mt: 6, p: 3 }}>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Box>
                <img src={landingWeb} alt="web" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack gap={2}>
                <Typography
                  sx={{ fontSize: 40, fontWeight: 600, lineHeight: 1.3 }}
                >
                  Medical Darpan provides the largest B2B paharmaceutical
                  products marketplace
                </Typography>
                <Typography sx={{ color: "#878787" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud \ exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Button
                  sx={{ width: "fit-content", px: 3 }}
                  variant="contained"
                >
                  Go to the Marketplace
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default About;
