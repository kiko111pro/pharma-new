import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { discount } from "../../assets/images";
function Offer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-around"
      alignItems={"center"}
      className="offer_background"
      sx={{ py: 3, height: 200, my: 2 }}
      spacing={4}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          gap: 2,
          px: 2,
          alignItems: "center",
          scale: { xs: 0.8 },
        }}
      >
        <Box>
          <img src={discount} alt="discount" />
        </Box>
        <Typography sx={{ color: "white", fontWeight: 700 }} variant="h2">
          <strong>-20%</strong>
        </Typography>
        <Typography sx={{ color: "white", fontWeight: 700 }} variant="h2">
          neutraceuticals
        </Typography>
      </Box>
      <Button
        sx={{
          maxWidth: 200,
          bgcolor: "white",
          ":hover": { bgcolor: "#eee" },
          mx: "auto",
          borderRadius: 40,
          px: 3,
          color: "#000",
        }}
      >
        {" "}
        Check Offers
      </Button>
    </Stack>
  );
}

export default Offer;
