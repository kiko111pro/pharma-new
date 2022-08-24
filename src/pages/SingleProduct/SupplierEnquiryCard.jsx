import React from "react";
import { Paper, Stack, Typography, Button, TextField } from "@mui/material";
import { colors } from "../../mui_theme/theme";
import { dummy } from "../../assets/images";
function SupplierEnquiryCard() {
  return (
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
          <Typography
            sx={{
              p: 1,
              px: 2,
              border: "0px solid grey",
            }}
          >
            Glenmark Pharmaceutical Limited
          </Typography>
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
  );
}

export default SupplierEnquiryCard;
