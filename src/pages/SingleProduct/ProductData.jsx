import React from "react";
import { Typography, Box, Stack, List, ListItem } from "@mui/material";
function ProductData({ details, name }) {
  const dummyData = [
    {
      left: "Packaging size",
      right: `${details?.packingLength}*${details?.packingWidth}`,
    },
    { left: "Strength", right: null },
    { left: "Composition", right: details?.composition },
    { left: "Treatment", right: details?.treatment },
    {
      left: "Prescription/non prescription",
      right: details?.prescription,
    },
    {
      left: "Form",
      right: details?.form,
    },
    { left: "Brand", right: details?.brand },
    {
      left: "Manufacturer",
      right: details?.manufacturer,
    },
    { left: "Description", right: details?.description },
    { left: "Packaging Type", right: null },
    {
      left: "Side Effects",
      right: details?.sideEffect,
      sideEffects: true,
    },
    {
      left: "Type",
      right: details?.medType,
    },
    {
      left: "Country Of Origin",
      right: details?.country,
    },
  ];

  return (
    <Stack>
      <Typography variant="h5">
        <strong>
          {name} {details?.form}
        </strong>
      </Typography>
      <Typography variant="subtitle1">
        <strong>Rs. {details?.price}</strong>
        /box
      </Typography>
      <Stack sx={{ my: 2 }}>
        {dummyData.map((item) => (
          <Stack
            justifyContent={"space-between"}
            spacing={1}
            sx={{ my: 1 }}
            direction="row"
          >
            <Box sx={{ width: "40%" }}>
              <Typography>
                <strong>{item.left} </strong>
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }} justifyContent="flex-start">
              {!!item.hasOwnProperty("sideEffects") ? (
                <List sx={{ listStyleType: "disc" }} disablePadding>
                  {item?.right?.map((val, key) => (
                    <ListItem
                      disablePadding
                      // sx={{ bgcolor: "yellow" }}
                      alignItems="flex-start"
                      key={key}
                    >
                      {val}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>{item.right}</Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ProductData;
