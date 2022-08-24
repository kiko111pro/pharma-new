import React from "react";
import { Paper, Stack, Typography, Divider, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { colors } from "../../mui_theme/theme";
function SupplierContactCard() {
  return (
    <Paper sx={{ py: 1, width: "100%" }}>
      <Stack>
        <Typography color={colors.primary} textAlign="center" variant="h6">
          Seller Contact Details
        </Typography>
        <Divider />
        <Stack gap={1} sx={{ p: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500, fontSize: 18 }}>
            Glenmark Pharmaceutical Limited
          </Typography>
          <Stack gap={1} direction="row" alignItems="center" spacing={3}>
            <AccountCircleIcon />
            <Typography variant="subtitle2">Manish Kumar Shrivasta</Typography>
          </Stack>
          <Stack gap={1} direction="row" alignItems="center" spacing={3}>
            <LocationOnIcon />
            <Stack>
              <Typography variant="subtitle2">
                No. 155 & 189 ,New Sardar Traders Market Parvat Patiya
                Surat-395010,Gujrat,India
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
                variant="subtitle2"
              >
                Get Directions
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={{ sm: "row", md: "column", lg: "row" }}
            justifyContent="center"
            gap={2}
          >
            <Button variant="outlined" startIcon={<MessageIcon />}>
              Send SMS
            </Button>
            <Button variant="outlined" startIcon={<MailOutlineIcon />}>
              Send E-Mail
            </Button>
          </Stack>
          {/* <Stack></Stack> */}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default SupplierContactCard;
