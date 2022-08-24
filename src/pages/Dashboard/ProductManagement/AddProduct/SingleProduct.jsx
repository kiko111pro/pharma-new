import React from "react";
import {
  Grid,
  Box,
  Stack,
  Button,
  Typography,
  OutlinedInput,
  ButtonBase,
} from "@mui/material";
import theme from "../../../../mui_theme/theme";
import { styled } from "@mui/material/styles";
import { upload } from "../../../../assets/images";

const Input = styled(OutlinedInput)(({ theme }) => ({
  height: 42,
}));

function SingleProduct() {
  return (
    <Stack
      sx={{
        minWidth: { xs: "80vw", sm: "80vw" },
        overflow: "scroll",
        maxHeight: "80vh",
        "&::-webkit-scrollbar": { width: 0 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 500,
            color: theme.palette.primary.main,
          }}
        >
          Single Product
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item gap={1} container xs={12} sm={6} md={4}>
          <Input placeholder="Packaging Size" fullWidth />
          <Input fullWidth placeholder="Strength" />
          <Input fullWidth placeholder="Composition" />
          <Input fullWidth placeholder="Treatment" />
          <Input fullWidth placeholder="Prescription / Non Prescription" />
          <Input fullWidth placeholder="Form" />
          <Input fullWidth placeholder="Brand" />
          <Input fullWidth placeholder="Manufacturer" />
          <Input fullWidth placeholder="Packaging Type" />
          <Input fullWidth placeholder="Type" />
          <Input fullWidth placeholder="Country of Origin" />
        </Grid>
        <Grid item container gap={1} xs={12} sm={6} md={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                height: { sm: "100%", xs: 200 },
                borderWidth: 1,
                borderColor: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                // py: 4,
              }}
            >
              <Button variant="outlined">Add Side Effects +</Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                height: { sm: "100%", xs: 200 },
                borderWidth: 1,
                display: "flex",
                justifyContent: "center",
                borderRadius: 1,
                borderColor: "#ccc",
                alignItems: "center",
              }}
            >
              <Button variant="outlined">Add Description</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item container gap={1} direction="column" xs={12} md={4}>
          <Box
            sx={{
              borderWidth: 1,
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              borderColor: "#ccc",
            }}
          >
            <Stack sx={{ maxWidth: 100, py: 2 }}>
              <ButtonBase>
                <img src={upload} alt="upload-images" />
              </ButtonBase>
              <Typography
                sx={{
                  color: "#d9d9d9",
                  fontSize: 25,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                UPLOAD IMAGES
              </Typography>
            </Stack>
          </Box>
          <Button variant="contained">Add Product</Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default SingleProduct;
