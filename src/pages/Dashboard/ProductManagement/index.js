import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import DataTable from "./DataTable";
import {
  Paper,
  Typography,
  Stack,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ResponsiveDrawer from "../Drawer/Drawer";

function ProductManagement() {
  return (
    <ResponsiveDrawer>
      <DashboardWrapper>
        <Paper sx={{ p: 2 }}>
          <Stack>
            <Typography variant="h5" gutterBottom>
              <strong>Product Management</strong>
            </Typography>

            <Stack
              gap={2}
              justifyContent={"space-between"}
              direction={{ md: "row" }}
            >
              <Stack
                sx={{ maxWidth: 500 }}
                justifyContent="center"
                direction="row"
                gap={1}
              >
                <OutlinedInput
                  fullWidth
                  placeholder={"Search Products"}
                  startAdornment={
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
                <Button variant="contained" sx={{ px: 4 }}>
                  Search
                </Button>
              </Stack>
              <Button variant="contained">Add new Product+</Button>
            </Stack>

            <DataTable />
          </Stack>
        </Paper>
      </DashboardWrapper>
    </ResponsiveDrawer>
  );
}

export default ProductManagement;
