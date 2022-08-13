import * as React from "react";
import { Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import database from "../../assets/images/data.png";
import {
  expertise,
  free,
  guidance,
  exportProduct,
  relations,
} from "../../assets/images";

export default function ResponsiveGrid() {
  const data = [
    {
      title: "The Largest Database",
      image: database,
      description:
        "Simplify product discovery, reduce business development effort and costs with access to an expert curated up-to date CTD dossier database.",
    },
    {
      title: "Direct supplier relations",
      image: relations,
      description:
        "We enjoy direct working relations with platform manufacturers. We'll provide the best conditions to negotiate your deal details and use our authority to make the deal happen",
    },
    {
      title: "Vetted Products",
      image: exportProduct,
      description:
        " We match customers only with qualified manufacturers. Our marketplace features only vetted products with upto-date regulatory data.",
    },
    {
      title: "Industry Expertise",
      image: expertise,
      description:
        "Simplify product discovery, reduce business development effort and costs with access to an expert curated up-to date CTD dossier database.",
    },
    {
      title: "Commercial Guidance",
      image: guidance,
      description:
        "Simplify product discovery, reduce business development effort and costs with access to an expert curated up-to date CTD dossier database.",
    },
    {
      title: "Its free!",
      image: free,
      description:
        "Simplify product discovery, reduce business development effort and costs with access to an expert curated up-to date CTD dossier database.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {data.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Stack spacing={1}>
                <img src={item.image} height="50px" width="50px" alt="data" />
                <Typography gutterBottom>
                  <strong>{item.title}</strong>
                </Typography>
                <Typography>{item.description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
