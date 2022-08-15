import {
  Container,
  Stack,
  Box,
  Paper,
  Typography,
  Avatar,
  ButtonBase,
} from "@mui/material";
import Footer from "../../components/layout/Footer";
import Banner from "./Banner";
import React from "react";
import SmallNavigation from "./SmallNavigation";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ProductCard from "../../components/ProductCard";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TimelineIcon from "@mui/icons-material/Timeline";
import dummy from "../../assets/images/dummy.png";
import { useBoolean } from "../../utils/hooks";
import ProductImageCard from "../../components/ProductImageCard";

function CompanyPage() {
  const dummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [readMore, setReadMore] = useBoolean(false);
  return (
    <Box textAlign="center" sx={{ mx: 0 }}>
      <Banner />
      {/* <Container maxWidth={"xl"}> */}
      <Stack>
        <Paper>
          <Container>
            <Stack sx={{ mt: 1 }}>
              <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                gap={2}
              >
                <SmallNavigation />
              </Stack>

              <Stack
                spacing={2}
                sx={{ my: 2, overflowX: "scroll" }}
                direction="row"
              >
                <ProductCard includeImage disableQuote />
                <ProductCard includeImage disableQuote />
                <ProductCard includeImage disableQuote />
                <ProductCard includeImage disableQuote />
                <ProductCard includeImage disableQuote />
                <ProductCard includeImage disableQuote />
              </Stack>
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  mx: 2,
                  mb: 2,
                  maxHeight: readMore ? "100%" : 500,

                  overflow: "hidden",
                }}
              >
                <Typography variant="h3">
                  <strong>About Us</strong>
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    overflow: "hidden",

                    textAlign: { xs: "justify", sm: "center" },
                    maxHeight: readMore ? "100%" : 400,

                    textOverflow: "ellipsis",
                    whiteSpace: "normal",

                    WebkitLineClamp: 10,
                  }}
                >
                  Established in the year 2015, in Chandigarh “Chemzone Pharma”
                  is engaged in wholesaler & trader the best quality range of
                  Pharmaceutical Syrup And Suspension, Pharmaceutical Tablets,
                  Pharmaceutical Capsules, Pharmaceutical Injections,
                  Pharmaceutical Drops and Pharmaceutical Sachets etc. We are
                  service provider of Pharma Franchise In Kerala, Pharma
                  Franchise In Karnataka, Pharma Franchise In Jammu And Kashmir,
                  Pharma Franchise In Andhra Pradesh, Pharma Franchise In
                  Arunachal Pradesh and Pharma Franchise In India etc. Supported
                  by the team of medical experts, we are providing optimum
                  quality medicines. Due to their features like long shelf life,
                  effectiveness, hygienically packed, accurate composition, safe
                  usage and balanced pH value, these medicines are highly
                  demanded in the medical industry. The offered range is made
                  available in safe and water proof packaging jdj D JDJD J DAJ J
                  DK KJD JD ADGUEUE U ADHJAHDJ HH DJKHAJDHJK hd hjkc ascjkadj u
                  jdjkadj aj option to provide safer delivery at user's end. In
                  order to ensure its quality.
                </Typography>
                <ButtonBase onClick={setReadMore.toggle}>
                  <Typography color="primary" sx={{ fontWeight: "bold" }}>
                    {!readMore ? "Read More +" : "Read Less"}
                  </Typography>
                </ButtonBase>
              </Box>

              <Stack
                alignSelf="center"
                justifyContent="space-around"
                direction="row"
                sx={{ width: "100%", flexWrap: "wrap", gap: 1, mb: 4 }}
              >
                <Stack alignItems="center">
                  <Avatar>
                    <BusinessCenterIcon />
                  </Avatar>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Nature of Business</strong>
                  </Typography>
                  <Typography variant="subtitle2">Manufacturer</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Avatar>
                    <ImportExportIcon />
                  </Avatar>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Import / Export Code</strong>
                  </Typography>
                  <Typography variant="subtitle2">ADBN*******</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Avatar>
                    <TimelineIcon />
                  </Avatar>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Annual Turnover</strong>
                  </Typography>
                  <Typography variant="subtitle2">400 Cr</Typography>
                </Stack>
                <Stack alignItems="center">
                  <Avatar>
                    <BusinessCenterIcon />
                  </Avatar>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Year of Establishment</strong>
                  </Typography>
                  <Typography variant="subtitle2">2003</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Paper>
        {/* bottom stacks */}
        <Container>
          <Stack>
            <Stack
              spacing={2}
              sx={{ overflowX: "scroll", my: 2 }}
              direction="row"
            >
              {dummyArr.map((item) => (
                <img src={dummy} alt="dummy" className="companypage__images" />
              ))}
            </Stack>
            <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="start">
              View all products of <strong>Fabifu Tablets</strong>
            </Typography>
            <Stack
              spacing={2}
              sx={{ overflowX: "scroll", my: 2 }}
              direction="row"
            >
              <ProductImageCard />
              <ProductImageCard />
              <ProductImageCard />
              <ProductImageCard />
              <ProductImageCard />
              <ProductImageCard />
              <ProductImageCard />
            </Stack>
          </Stack>
        </Container>
      </Stack>
      {/* </Container> */}
      <Footer />
    </Box>
  );
}

export default CompanyPage;
