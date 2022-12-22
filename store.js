import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./slices/detailsSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice.reducer,
  },
});
