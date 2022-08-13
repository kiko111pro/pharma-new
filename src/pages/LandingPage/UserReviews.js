import * as React from "react";
import user from "../../assets/images/dummyUser.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Stack, Avatar } from "@mui/material";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={6} key={index}>
            <Paper sx={{ p: 4 }} variant="outlined">
              <Stack sx={{ mb: 2 }} direction="row">
                <Avatar sx={{ mr: 2 }} alt="Remy Sharp" src={user} />
                <Stack>
                  <Typography>
                    <strong>Gaurav Taneja</strong>
                  </Typography>
                  <Typography>
                    {" "}
                    Business Development Director, Global Licensing Genepharm
                  </Typography>
                </Stack>
              </Stack>
              <Typography>
                "By using Pipelinepharma service we found new reliable
                pharmaceutical companies with whom we signed licensing and
                supply agreements. Pipelinepharma has become an extension to our
                global sales channel for our company."
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
