import React from "react";
import { Box, Stack } from "@mui/material";
import { dummy } from "../../assets/images";
function ImageGallery() {
  let itemData = [1, 1, 1, 1];
  return (
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
  );
}

export default ImageGallery;
