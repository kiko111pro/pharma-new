import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supplierService from "./supplier.service";

const initialState = {
  supplier: {},

  loading: false,
  isError: false,
  error: "",
};

export const getSupplierById = createAsyncThunk(
  "supplier/byID",
  async (payload, thunkAPI) => {
    const res = await supplierService.getSupplierById(payload);
    if (res.isSuccessful) return res.data;
    return thunkAPI.rejectWithValue(res.message || "Something Went Wrong");
  }
);

const supplierSlice = createSlice({
  name: "suppliers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSupplierById.pending, (state, action) => {
        state.loading = true;
        console.log("Request Pending");
      })
      .addCase(getSupplierById.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.supplier = action.payload;
      })
      .addCase(getSupplierById.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default supplierSlice.reducer;
