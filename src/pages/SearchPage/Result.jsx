import React from "react";
import {
  Paper,
  Typography,
  Stack,
  Divider,
  Box,
  Button,
  ButtonBase,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { dummy } from "../../assets/images";
import { colors } from "../../mui_theme/theme";
import { useNavigate } from "react-router-dom";
function Cards() {
  const navigate = useNavigate();
  return (
    <Paper
      //   variant="outlined"
      elevation={2}
      sx={{
        maxWidth: 330,
        width: "100%",
        borderWidth: 0,
        borderBottomWidth: 6,
        borderColor: colors.primary,
        mx: { xs: "auto", md: 0 },
        display: "flex",
        alignContent: "flex-start",
      }}
    >
      <Stack>
        <Stack sx={{ p: 1 }}>
          <ButtonBase onClick={() => navigate("/product")}>
            <img src={dummy} alt="product" />
          </ButtonBase>
          <Stack sx={{ textAlign: "center", my: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              Calpol 500mg Tablets
            </Typography>
            <Typography sx={{ color: "#444", fontWeight: 600 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: colors.primary,
                  fontSize: 18,
                  display: "inline",
                }}
              >
                Rs 1881
              </Typography>
              / stripe
            </Typography>
          </Stack>
          <Stack sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
              Glenmark Pharma Limited
            </Typography>
            <Typography sx={{ color: "#444" }}>Amritsar, Punjab</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Button
          onClick={() => navigate("/company")}
          startIcon={<TelegramIcon />}
          color="secondary"
        >
          Contact Supplier
        </Button>
      </Stack>
    </Paper>
  );
}

export default Cards;
