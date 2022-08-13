import React from "react";
import {
  Paper,
  Box,
  Typography,
  Stack,
  Divider,
  Button,
  ButtonBase,
} from "@mui/material";
import { productDemo } from "../../assets/images";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";

function Card({ showContactButton }) {
  const navigate = useNavigate();
  return (
    <Paper sx={{ p: 1, minWidth: 200, maxWidth: 250 }} variant="outlined">
      <Stack>
        <Box sx={{ px: 3 }}>
          <ButtonBase onClick={() => navigate("/product")}>
            <img src={productDemo} alt="img" />
          </ButtonBase>
        </Box>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}>
          Favipiravir (Fabiflu) Tablets 800mg
        </Typography>
        {showContactButton && (
          <>
            <Divider />
            <Button
              onClick={() => navigate("/company")}
              startIcon={<TelegramIcon />}
              color="secondary"
            >
              Contact Supplier
            </Button>
          </>
        )}
      </Stack>
    </Paper>
  );
}

export default Card;
