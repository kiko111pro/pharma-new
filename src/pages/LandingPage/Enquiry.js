import React from "react";
import {
  Stack,
  Box,
  OutlinedInput,
  Button,
  Container,
  Typography,
} from "@mui/material";
import chat from "../../assets/images/chat.png";

function Enquiry({ queryForm = false }) {
  return (
    <Container>
      <Box
        sx={{
          p: 5,
          bgcolor: "#993737",
          justifyContent: "center",
          borderRadius: 2,
          mb: 2,
        }}
      >
        <Stack
          spacing={{ xs: 4, md: 18 }}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          {queryForm ? (
            <Typography
              sx={{ maxWidth: 400, color: "#fff", textAlign: "start" }}
              variant="h2"
            >
              Any Queries? Contact us by filling the form
            </Typography>
          ) : (
            <img src={chat} style={{ maxHeight: 200 }} alt="chat" />
          )}

          <Stack spacing={2} sx={{ width: "100%", maxWidth: 500 }}>
            <OutlinedInput
              className="enquiry__input"
              placeholder="Enter Product"
            />
            <OutlinedInput
              className="enquiry__input"
              placeholder="Enter Name"
            />
            <OutlinedInput
              className="enquiry__input"
              placeholder="Enter Mobile"
            />
            {queryForm && (
              <OutlinedInput
                className="enquiry__input"
                placeholder="Enter Mobile"
                multiline
                rows={4}
              />
            )}
            <Button
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.7)",
                ":hover": { bgcolor: "white" },
              }}
            >
              Submit Requirements
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default Enquiry;
