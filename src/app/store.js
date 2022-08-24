import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search_product/search.reducer";
import supplierReducer from "../features/supplier/supplier.reducer";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    supplier: supplierReducer,
  },
});
