import React from "react";
import { Typography as Text, Stack, Container } from "@mui/material";
// import "./style.css";

function Banner() {
  return (
    <Stack direction={"row"} className={"banner"}>
      <Container
        maxWidth="xl"
        sx={{ my: "auto", display: "column", justifyContent: "center" }}
      >
        <Text variant="h2" sx={{ fontWeight: 700, color: "#fff" }}>
          My Wallet
        </Text>
      </Container>
    </Stack>
  );
}

export default Banner;
