import React from "react";
import { Typography as Text, Stack, Container } from "@mui/material";
import "./style.css";

function Banner() {
  return (
    <Stack direction={"row"} className={"banner"}>
      <Container
        maxWidth="xl"
        sx={{ my: "auto", display: "column", justifyContent: "center" }}
      >
        <Text variant="h2" sx={{ fontWeight: 700, color: "#fff" }}>
          Register for a new Account
        </Text>
        <Text sx={{ color: "#fff" }}>Already have a account? Sign in</Text>
      </Container>
    </Stack>
  );
}

export default Banner;
