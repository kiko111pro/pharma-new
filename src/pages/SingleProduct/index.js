import React from "react";
import {
  Stack,
  Container,
  Typography,
  Paper,
  Box,
  InputBase,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { dummy } from "../../assets/images";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StoreIcon from "@mui/icons-material/Store";
import ProductImageCard from "../../components/ProductImageCard";
import { colors } from "../../mui_theme/theme";
import { Link } from "react-router-dom";

function Product() {
  const itemData = [1, 1, 1, 1];
  const dummyData = [
    { left: "Packaging size", right: "1*17" },
    { left: "Strength", right: "400mg" },
    { left: "Composition", right: "favipivavir" },
    { left: "Treatment", right: "covid-19 mild " },
    { left: "Prescription/non prescription", right: "prescription" },
    {
      left: "Description",
      right:
        "Favipiravir is a medicine that belongs to a class of medicines called antiviral medicines. Favipiravir is used for managing patients suffering from mild to moderate Covid-19 infection.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Typography variant="subtitle1" sx={{ my: 1 }}>
        {
          "Medical Darpan > Anti Infective Drugs & Medicines > Favipiravir Tablet > FabiFlu Tablet"
        }
      </Typography>
      <Stack direction={{ lg: "row", md: "column" }} spacing={1}>
        <Stack sx={{ minWidth: "60%" }} spacing={1}>
          <Paper sx={{ p: 1 }}>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <Box>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <Stack
                    spacing={1}
                    direction={{ xs: "row", md: "column" }}
                    sx={{
                      overflow: "scroll",
                      minWidth: 100,
                      "&::-webkit-scrollbar": { width: 0 },
                    }}
                  >
                    {itemData.map((i) => (
                      <img
                        style={{
                          maxHeight: "90px",
                          width: "auto",
                          borderRadius: "8px",
                        }}
                        src={dummy}
                        alt="logo"
                      />
                    ))}
                  </Stack>
                  <img src={dummy} style={{ maxWidth: 400 }} alt="logo" />
                </Stack>
              </Box>
              {/* showing all medicine data */}
              <Stack>
                <Typography variant="h5">
                  <strong>Favipiravir 400mg (Fabiflu) Tablets</strong>
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Rs. 11000</strong>/box
                </Typography>
                <Stack sx={{ my: 2 }}>
                  {dummyData.map((item) => (
                    <Stack
                      justifyContent={"space-between"}
                      spacing={1}
                      sx={{ my: 1 }}
                      direction="row"
                    >
                      <Box sx={{ width: "40%" }}>
                        <Typography>
                          <strong>{item.left} </strong>
                        </Typography>
                      </Box>
                      <Box sx={{ width: "50%" }} justifyContent="flex-start">
                        <Typography>{item.right}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Paper>
          <Paper sx={{ p: 1, width: "100%" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <StoreIcon fontSize="large" color="primary" />{" "}
              <Typography
                sx={{ textDecoration: "underline" }}
                color={colors.primary}
                variant="h4"
              >
                View more sellers
              </Typography>
              <Typography color={colors.grey}>
                selling the same product
              </Typography>
            </Stack>
          </Paper>
        </Stack>
        {/* right most side */}
        <Stack
          // spacing={2}
          flexWrap="wrap"
          direction={{ xs: "column", md: "row", lg: "column" }}
          sx={{ minWidth: "30%", mt: { xs: 1, md: 0 } }}
          gap={1}
        >
          <Paper sx={{ p: 2, pt: 3, width: "100%" }}>
            <Stack spacing={2}>
              <Typography textAlign={"center"} variant="h6">
                <strong>Glenmark Pharmaceutical Limited</strong>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img
                  src={dummy}
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  alt="dummy"
                />
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1}>
                    <LocationOnIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      Parvat Patiya, Surat , Gujrat
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography>4.8/5 </Typography>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckCircleIcon color="success" />
                    <Typography>
                      <strong>GST</strong> - FWD2242SDSF
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Stack>
              <Link to="/company">
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="caption">Contact Supplier</Typography>
                </Box>
              </Link>
            </Stack>
          </Paper>

          {/* SEcond CARD */}
          <Paper sx={{ width: "100%" }}>
            <Stack>
              <Typography
                color={colors.primary}
                textAlign="center"
                sx={{ p: 1 }}
                variant={"h6"}
              >
                Send the enquiry to this supplier
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  border: "0px solid grey",
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    px: 2,
                    border: "0px solid grey",
                    borderRightWidth: 1,
                  }}
                >
                  To
                </Typography>
                <InputBase
                  sx={{ px: 1, color: "#000" }}
                  fullWidth
                  disabled
                  value="Glenmark Pharmaceutical Limited"
                />
              </Stack>
              <Stack direction={"row"} sx={{ p: 2 }} spacing={2}>
                <Stack sx={{ maxWidth: "25%" }}>
                  <img src={dummy} style={{ maxWidth: "100%" }} alt="logo" />
                  <Typography>Favipiravir 400mg (Fabiflu) Tablets</Typography>
                </Stack>
                <TextField
                  sx={{ maxHeight: "100%" }}
                  rows={5}
                  multiline
                  fullWidth
                  placeholder="Type your message here..."
                />
              </Stack>
              <Button sx={{ mx: 2, mb: 3 }} variant="contained">
                Submit Requirements
              </Button>
            </Stack>
          </Paper>
          <Paper sx={{ py: 1, width: "100%" }}>
            <Stack>
              <Typography
                color={colors.primary}
                textAlign="center"
                variant="h6"
              >
                Seller Contact Details
              </Typography>
              <Divider />
              <Stack gap={1} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Glenmark Pharmaceutical Limited
                </Typography>
                <Stack gap={1} direction="row" alignItems="center" spacing={3}>
                  <AccountCircleIcon />
                  <Typography variant="subtitle2">
                    Manish Kumar Shrivasta
                  </Typography>
                </Stack>
                <Stack gap={1} direction="row" alignItems="center" spacing={3}>
                  <LocationOnIcon />
                  <Stack>
                    <Typography variant="subtitle2">
                      No. 155 & 189 ,New Sardar Traders Market Parvat Patiya
                      Surat-395010,Gujrat,India
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                      variant="subtitle2"
                    >
                      Get Directions
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ sm: "row", md: "column", lg: "row" }}
                  justifyContent="center"
                  gap={2}
                >
                  <Button variant="outlined" startIcon={<MessageIcon />}>
                    Send SMS
                  </Button>
                  <Button variant="outlined" startIcon={<MailOutlineIcon />}>
                    Send E-Mail
                  </Button>
                </Stack>
                {/* <Stack></Stack> */}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
      <Typography sx={{ my: 2, fontWeight: 600 }} variant="h4">
        View all products in <strong>Fabiflu Tablet</strong>
      </Typography>
      <Stack
        sx={{ mb: 2, "&::-webkit-scrollbar": { width: 0 } }}
        direction={"row"}
        spacing={2}
        style={{
          overflow: "scroll",
          overflowY: "hidden",
        }}
      >
        <ProductImageCard showContactButton />
        <ProductImageCard showContactButton />
        <ProductImageCard showContactButton />
        <ProductImageCard showContactButton />
        <ProductImageCard showContactButton />
        <ProductImageCard showContactButton />
      </Stack>
    </Container>
  );
}

export default Product;
