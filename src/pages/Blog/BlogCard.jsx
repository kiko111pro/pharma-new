import React from "react";
import { Paper, Box, Typography, ButtonBase } from "@mui/material";
import { drugs } from "../../assets/images";
function BlogCard() {
  return (
    <Paper sx={{ width: "100%", maxWidth: 330 }} variant="outlined">
      <Box>
        <img src={drugs} alt="meds" />
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 20,
          textAlign: "center",
          px: 2,
          pt: 1,
          lineHeight: 1.3,
        }}
      >
        How our medicine are best and different from others
      </Typography>
      <ButtonBase sx={{ mx: "auto", display: "block", p: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 18,

            textDecoration: "underline",
            textDecorationThickness: 1,

            color: "#171773",
          }}
        >
          Read More
        </Typography>
      </ButtonBase>
    </Paper>
  );
}

export default BlogCard;
