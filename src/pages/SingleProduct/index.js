import React, { useEffect } from "react";
import { Stack, Container, Typography, Paper } from "@mui/material";

import StoreIcon from "@mui/icons-material/Store";
import ProductImageCard from "../../components/ProductImageCard";
import { colors } from "../../mui_theme/theme";

import Footer from "../../components/layout/Footer";
import { useParams } from "react-router-dom";
// import { useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../features/search_product/search.reducer";
import ImageGallery from "./ImageGallery";
import ProductData from "./ProductData";
import SupplierDetailsCard from "./SupplierDetailsCard";
import SupplierEnquiryCard from "./SupplierEnquiryCard";
import SupplierContactCard from "./SupplierContactCard";
// import { getSupplierById } from "../../features/supplier/supplier.reducer";
import Loading from "../../components/Loading";

function Product() {
  const dispatch = useDispatch();
  const { productDetails, loading } = useSelector((state) => state.search);
  const { id } = useParams();

  useEffect(() => {
    console.log("Fine");
  }, []);
  // const itemData = [1, 1, 1, 1];

  useEffect(() => {
    console.log("Inside index effect");
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (!!loading) return <Loading />;

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="subtitle1" sx={{ my: 1 }}>
          {
            "Medical Darpan > Anti Infective Drugs & Medicines > Favipiravir Tablet > FabiFlu Tablet"
          }
        </Typography>
        <Stack direction={{ lg: "row", md: "column" }} spacing={1}>
          <Stack sx={{ minWidth: "70%" }} spacing={1}>
            <Paper sx={{ p: 1 }}>
              <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                <ImageGallery />
                {/* showing all medicine data */}
                <ProductData
                  details={productDetails?.Product?.details}
                  name={productDetails?.Product?.name}
                />
              </Stack>
            </Paper>
            <Paper sx={{ p: 1, width: "100%" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <StoreIcon fontSize="large" color="primary" />{" "}
                <Typography
                  // sx={{ textDecoration: "underline" }}
                  color={colors.primary}
                  variant="h6"
                >
                  View more sellers selling the same product
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
            <SupplierDetailsCard />

            {/* SEcond CARD */}
            <SupplierEnquiryCard />
            <SupplierContactCard />
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
      <Footer />
    </>
  );
}

export default Product;
