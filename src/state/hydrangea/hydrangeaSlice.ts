import { createSlice } from "@reduxjs/toolkit";

import { fetchHydrangea, insertHydrangea } from "./hydrangeaThunks";

import type { RootState } from "../store";

export interface HydrangeaState {
  value: number;
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: HydrangeaState = {
  value: 0,
  status: "idle",
};

const hydrangeaSlice = createSlice({
  name: "hydrangea",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHydrangea.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchHydrangea.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchHydrangea.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(insertHydrangea.pending, (state) => {
        state.status = "pending";
      })
      .addCase(insertHydrangea.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(insertHydrangea.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default hydrangeaSlice.reducer;

export const selectHydrangea = (state: RootState) => state.hydrangea.value;

export const selectAllHydrangea = (state: RootState) => state.hydrangea.value;

export const selectHydrangeaStatus = (state: RootState) =>
  state.hydrangea.status;
