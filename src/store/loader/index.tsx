import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: true,
  },
  reducers: {
    getLoaderStatus: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
    getLoaderStatus,
} = loaderSlice.actions;

export default loaderSlice.reducer;
