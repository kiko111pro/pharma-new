import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { colors } from "../../../mui_theme/theme";
import { styled } from "@mui/material/styles";
import location from "../../../assets/images/location.png";
import "./style.css";

function Footer() {
  const Text = styled(Typography)`
    color: #fff;
  `;
  return (
    <Grid
      sx={{ bgcolor: colors.primary, p: 5, mt: 3 }}
      container
      justifyContent="space-between"
      spacing={4}
    >
      <Grid item xs={12} sm={4}>
        <Stack>
          <Text gutterBottom>
            <strong>Pharma Emart</strong>
          </Text>
          <Text gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            blanditiis pariatur nulla recusandae tenetur voluptates aut dolor
            inventore? Fugit molestiae officiis assumenda sapiente minus
            mollitia ex magni, cumque quidem eos!
          </Text>
          <Stack spacing={2} sx={{ color: "#fff" }} direction="row">
            <FacebookIcon /> <TwitterIcon /> <LinkedInIcon /> <InstagramIcon />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Stack>
          <Text gutterBottom>
            <strong>Pages</strong>
          </Text>
          <Text>How it works</Text>
          <Text>Pricing</Text>
          <Text>Blog</Text>
          <Text>Demo</Text>
        </Stack>
      </Grid>
      <Grid item xs={6} md={2}>
        <Stack>
          <Text gutterBottom>
            <strong>Service</strong>
          </Text>
          <Text>How it works</Text>
          <Text>Pricing</Text>
          <Text>Blog</Text>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Stack>
          <Text gutterBottom>
            <strong>Location</strong>
          </Text>
          <img src={location} alt="map" className="footer_location" />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Footer;
