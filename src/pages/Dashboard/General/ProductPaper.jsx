import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import ProductImageCard from "../../../components/ProductImageCard";

function ProductPaper() {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography sx={{ fontSize: 28, fontWeight: 500 }}>
        Total Products(4)
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
      </Box>
    </Paper>
  );
}

export default ProductPaper;
