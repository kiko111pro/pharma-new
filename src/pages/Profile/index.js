import React from "react";
import {
  Stack,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import dummyUser from "../../assets/images/dummyUser.png";

function Profile() {
  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Stack>
        <Stack sx={{ my: 2 }} direction="row" justifyContent="space-between">
          <Typography variant="h4">
            <strong>Personal Details</strong>
          </Typography>
          <Button variant="contained">Register as a Company</Button>
        </Stack>
        <Paper sx={{ p: 5, textAlign: "Center" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="center"
          >
            <img src={dummyUser} alt="user" />
            <Stack spacing={3}>
              <TextField label="Enter Name" />
              <TextField label="Enter Phone" />
              <TextField label="Enter Email" />
            </Stack>
          </Stack>
          <Button sx={{ m: 3 }} variant="contained">
            Save
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}

export default Profile;
