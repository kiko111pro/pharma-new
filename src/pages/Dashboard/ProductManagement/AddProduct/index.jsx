import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import SingleProduct from "./SingleProduct";
import MultipleProduct from "./MultipleProducts";
function AddProduct() {
  const [activeForm, setActiveForm] = React.useState(null);

  if (activeForm === "single") return <SingleProduct />;
  if (activeForm === "multiple") return <MultipleProduct />;

  return (
    <Stack sx={{ pb: 5, px: 4, pt: 3 }} spacing={4}>
      <Typography sx={{ fontSize: 30, textAlign: "center", fontWeight: 500 }}>
        What Do You want to add
      </Typography>
      <Button variant="contained" onClick={() => setActiveForm("single")}>
        Single Product
      </Button>
      <Button variant="contained" onClick={() => setActiveForm("multiple")}>
        Multiple Products
      </Button>
    </Stack>
  );
}

export default AddProduct;
