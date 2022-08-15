import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { discount } from "../../assets/images";
function Offer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      // justifyContent="center"
      alignItems={"center"}
      className="offer_background"
      sx={{
        py: 3,
        height: 200,
        my: 2,
        maxWidth: "100vw",
        // bgcolor: "blue",
        justifyContent: "space-around",
      }}
      // spacing={4}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          gap: 2,
          px: 2,
          alignItems: "center",
          // scale: { xs: 0.8 },
          justifyContent: "space-around",
          // bgcolor: "yellow",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            maxHeight: 70,
            maxWidth: 70,
            // bgcolor: "yellow",
          }}
        >
          <img src={discount} alt="discount" />
        </Box>
        <Typography
          sx={{
            color: "white",
            fontWeight: 600,
            fontSize: { xs: "1.8rem", md: "2rem" },
          }}
        >
          <strong>-20%</strong>
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: 600,
            fontSize: { xs: "1.8rem", md: "2rem" },
          }}
          variant="h3"
        >
          neutraceuticals
        </Typography>
      </Box>
      <Button
        sx={{
          // maxWidth: 200,
          bgcolor: "white",
          ":hover": { bgcolor: "#eee" },
          // mx: "auto",
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
