import React, { useEffect } from "react";
import { Stack, Typography, Box, Paper, Divider, Rating } from "@mui/material";
import { dummy } from "../../assets/images";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { fullImageUrl, rating } from "../../utils/helpers";
import { getSupplierById } from "../../features/supplier/supplier.reducer";

function SupplierDetailsCard() {
  const dispatch = useDispatch();
  const { supplier, loading = true } = useSelector((state) => state.supplier);

  useEffect(() => {
    console.log("Calling dispatch");
    dispatch(getSupplierById("62ffaadcde307f47574cbb67"));
  }, [dispatch]);

  console.log("Supplier", loading);

  if (loading) return <Loading />;

  return (
    <Paper sx={{ p: 2, pt: 3, width: "100%" }}>
      <Stack spacing={2}>
        <Typography textAlign={"center"} variant="h6">
          <strong>{supplier.Supplier.name}</strong>
        </Typography>
        <Stack direction="row" spacing={2}>
          <img
            src={fullImageUrl(supplier.Supplier.image.url)}
            style={{
              maxWidth: "100px",
              height: "auto",
              objectFit: "contain",
            }}
            alt="dummy"
          />
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <LocationOnIcon />
              <Typography variant="subtitle1">
                {" "}
                {supplier.Supplier.address}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>{rating(supplier.Supplier.rating)}/5 </Typography>
              <Rating
                value={rating(supplier.Supplier.rating)}
                // contentEditable={false}
                readOnly
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckCircleIcon color="success" />
              <Typography>
                <strong>GST</strong> - FWD2242SDSF
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Stack>
        <Link to="/company">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">Contact Supplier</Typography>
          </Box>
        </Link>
      </Stack>
    </Paper>
  );
}

export default SupplierDetailsCard;
