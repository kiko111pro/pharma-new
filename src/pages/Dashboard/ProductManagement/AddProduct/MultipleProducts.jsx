import React from "react";
import { Stack, Button, Box, Typography } from "@mui/material";
import theme from "../../../../mui_theme/theme";

function MultipleProducts() {
  return (
    <>
      <Stack spacing={3} sx={{ p: 1 }}>
        <Box>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 500,
              color: theme.palette.primary.main,
            }}
          >
            Multiple Products
          </Typography>
        </Box>
        <Stack spacing={2}>
          <Box
            sx={{
              width: 300,
              borderColor: "#aaa",
              borderWidth: 1,
              borderStyle: "dotted",
              height: 200,
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="outlined">Add Excel File</Button>
          </Box>
          <Button variant="contained">Insert</Button>
        </Stack>
      </Stack>
    </>
  );
}

export default MultipleProducts;
