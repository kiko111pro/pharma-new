import searchService from "./search.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
  productDetails: {},

  loading: null,
  isError: false,
  error: "",
};

export const getSearchResult = createAsyncThunk(
  "products/search",
  async (payload, thunkAPI) => {
    const res = await searchService.getSearchResults(payload);

    if (res.isSuccessful) return res.data;
    return thunkAPI.rejectWithValue(res.message || "Can't get results");
  }
);

export const getProductById = createAsyncThunk(
  "product/id",
  async (payload, thunkAPI) => {
    const res = await searchService.getProductById(payload);

    if (res.isSuccessful) return res.data;
    return thunkAPI.rejectWithValue(res.message || "Can't get Product");
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      // if any async thunk is Pending
      .addCase(getProductById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSearchResult.pending, (state, action) => {
        state.loading = true;
      })
      // if any thunk is Rejected
      .addCase(getSearchResult.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.searchResult = action.payload;
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.productDetails = action.payload;
      });
  },
});

export default searchSlice.reducer;
