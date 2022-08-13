import React from "react";
import { Stack, Paper, Typography, Divider } from "@mui/material";
import { colors } from "../../mui_theme/theme";
import dummy from "../../assets/images/dummy.png";

function Card({ includeImage = false, disableQuote = false }) {
  return (
    <Paper variant="outlined" sx={{ maxWidth: 380, minWidth: 280 }}>
      <Stack>
        <Stack direction="row">
          {includeImage && <img src={dummy} alt="" width="100px" />}
          <Stack textAlign="center" sx={{ p: 2 }}>
            <Typography>
              <strong>Favipiravir (Fabiflu) Tablets 400mg</strong>
            </Typography>
            <Typography color={colors.primary}>
              <strong>Rs 1,775</strong> / stripe
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Typography textAlign="center" sx={{ py: 1 }} variant="caption">
          Contact Supplier
        </Typography>
        <Divider />
        <Stack
          overflow={"hidden"}
          alignItems={"center"}
          sx={{ bgcolor: colors.primary, py: 1, cursor: "pointer" }}
        >
          {!disableQuote && (
            <>
              <Typography color={"white"} variant="h6">
                Get Latest Price
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Request Quote
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Card;
