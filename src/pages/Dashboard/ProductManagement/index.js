import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import DataTable from "./DataTable";

import {
  Paper,
  Typography,
  Stack,
  OutlinedInput,
  Box,
  InputAdornment,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ResponsiveDrawer from "../Drawer/Drawer";
import AddProduct from "./AddProduct";
import { useBoolean } from "../../../utils/hooks";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // maxWidth: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // width: "95%",
  minWidth: 350,
  // width: { md: 1200 },
  // maxHeight: "95vh",
  p: 1,
  // overflow: "scroll",
};

function ProductManagement() {
  const [openModal, setOpenModal] = useBoolean(false);
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
                sx={{ maxWidth: 400, width: "100%" }}
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
                <Button
                  variant="contained"
                  sx={{ px: 4, width: "fit-content" }}
                >
                  Search
                </Button>
              </Stack>
              <Button onClick={setOpenModal.on} variant="contained">
                Add new Product+
              </Button>
            </Stack>

            <Box
              sx={{
                width: { xs: "85vw", md: "100%" },
                maxWidth: 1000,
                p: 2,
              }}
            >
              <DataTable />
            </Box>
          </Stack>
        </Paper>
      </DashboardWrapper>

      {/* **********MODAL****************** */}

      <Modal
        open={openModal}
        // onClose={setOpenModal.off}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Box sx={{ textAlign: "right" }}>
            <IconButton onClick={setOpenModal.off}>
              <CloseIcon />
            </IconButton>
          </Box>
          <AddProduct />
        </Paper>
      </Modal>
    </ResponsiveDrawer>
  );
}

export default ProductManagement;
