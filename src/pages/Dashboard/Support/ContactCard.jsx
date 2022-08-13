import { Paper, Stack, Box, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { colors } from "../../../mui_theme/theme";

function ContactCard({ icon, title, info }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        width: 250,
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        p: 1,
      }}
    >
      <Stack>
        <Typography
          sx={{ fontSize: 18, fontWeight: 500, color: colors.primary }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 15 }}>{info}</Typography>
      </Stack>
      {icon && (
        <Box>
          <WhatsAppIcon fontSize="large" />
        </Box>
      )}
    </Paper>
  );
}

export default ContactCard;
