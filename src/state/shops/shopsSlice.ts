import { createSlice } from "@reduxjs/toolkit";

import { fetchShops, deleteShop, addShop } from "./shopsThunks";

import type { RootState } from "../store";
import type { Shop } from "../types";

export interface ShopsState {
  data: Shop[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ShopsState = {
  data: [],
  status: "idle",
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchShops.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addShop.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addShop.fulfilled, (state, { payload }: { payload: Shop[] }) => {
        state.status = "succeeded";
        state.data = [...state.data, payload[0]];
      })
      .addCase(addShop.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteShop.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteShop.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteShop.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default shopsSlice.reducer;

export const selectShops = (state: RootState) => state.shops.data;

export const selectShopsStatus = (state: RootState) => state.shops.status;

export const selectShopsLength = (state: RootState) => state.shops.data.length;
