import React from "react";
import Banner from "./Banner";
import {
  Stack,
  Typography,
  Accordion,
  Paper,
  Container,
  Box,
} from "@mui/material";

function Wallet() {
  return (
    <Stack>
      <Banner />
      <Container>
        <Paper>
          <Stack></Stack>
        </Paper>
      </Container>
    </Stack>
  );
}

export default Wallet;
