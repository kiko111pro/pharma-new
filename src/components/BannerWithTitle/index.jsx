import React from "react";
import { Stack, Typography as Text, Container } from "@mui/material";

const Index = ({ title }) => {
  return (
    <Stack direction={"row"} className={"banner"}>
      <Container
        maxWidth="xl"
        sx={{ my: "auto", display: "column", justifyContent: "center" }}
      >
        <Text variant="h2" sx={{ fontWeight: 700, color: "#fff" }}>
          {title}
        </Text>
      </Container>
    </Stack>
  );
};

export default Index;
