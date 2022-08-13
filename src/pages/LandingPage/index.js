import React from "react";
import Banner from "./Banner";
import { Stack, Typography, Container, Grid, Box } from "@mui/material";
import Enquiry from "./Enquiry";
import Trending from "./Trending";
import Offer from "./Offer";
import Hero from "./Hero";
import UserReviews from "./UserReviews";
import Choice from "./Choice";
import Footer from "../../components/layout/Footer";
import "./style.css";
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../../assets/images";
import { landingWeb } from "../../assets/images";
import VerticalLinearStepper from "./Stepper";

const COMPANY_LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6];

function Landing() {
  return (
    <Stack>
      <Banner />
      <Enquiry />
      <Trending showInfo title="Trending Products" />
      <Trending title="Trending Manufacturers" />
      <Trending title="Trending Distributors" />
      <Offer />
      <Hero
        title={"Discover high-quality Products"}
        text={
          "Simplify product discovery with the largest EU CTD dossier database. Expert curated, up-to-date information. Powerful search engine and product filters."
        }
        button="Go to the Marketplace"
      />
      <Hero
        title="Match with the right manufacturers
        "
        text="
        Reduce time-to-contract by finding qualified manufacturers. Share your expectations, get competitive offers and connect with suppliers directly.
        "
        button="Go to the Marketplace"
        reverse
      />

      <Container>
        <Grid container sx={{ px: 4, mb: 3 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <VerticalLinearStepper />
          </Grid>
          <Grid sx={{ display: { xs: "none", md: "block" } }} item md={6}>
            <img src={landingWeb} alt="web" />
          </Grid>
        </Grid>
      </Container>

      <Stack sx={{ bgcolor: "#993737", px: 2, py: 3, p: 3, mt: 6 }}>
        <Typography
          gutterBottom
          sx={{ textAlign: "center", color: "white", mb: 4, fontWeight: 700 }}
          variant="h2"
        >
          Trusted by
        </Typography>
        <Grid
          container
          // spacing={6}
          justifyContent="center"
          alignContent="center"
          // sx={{ bgcolor: "yellow" }}
        >
          {COMPANY_LOGOS.map((item) => (
            <Grid
              item
              xs={6}
              md={2}
              gap={5}
              sx={{ m: 1 }}
              container
              justifyContent="center"
            >
              <Box sx={{ m: 1, textAlign: "center" }}>
                <img src={item} alt="logo" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Container sx={{ my: 7 }}>
        <Stack>
          <Typography variant="h3" sx={{ mb: 7 }} textAlign="center">
            <strong>The first choice of Pharma Professionals</strong>
          </Typography>
          <Choice />
        </Stack>
      </Container>

      <Container sx={{ my: 5 }}>
        <Stack>
          <Typography variant="h3" sx={{ mb: 7 }} textAlign="center">
            <strong>What do our happy customer say about us</strong>
          </Typography>
          <UserReviews />
        </Stack>
      </Container>

      <Enquiry queryForm />

      <Footer />
    </Stack>
  );
}

export default Landing;
