import { createSlice } from "@reduxjs/toolkit";

import {
  fetchGroceryItems,
  deleteGroceryItem,
  addGroceryItem,
} from "./groceryItemsThunks";

import type { RootState } from "../store";
import type { GroceryItem } from "../types";

export interface GroceryItemsState {
  data: GroceryItem[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: GroceryItemsState = {
  data: [],
  status: "idle",
};

const groceryItemsSlice = createSlice({
  name: "groceryItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroceryItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchGroceryItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGroceryItems.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addGroceryItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        addGroceryItem.fulfilled,
        (state, { payload }: { payload: GroceryItem }) => {
          state.status = "succeeded";
          state.data = [...state.data, payload];
        },
      )
      .addCase(addGroceryItem.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteGroceryItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteGroceryItem.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteGroceryItem.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default groceryItemsSlice.reducer;

export const selectGroceryItems = (state: RootState) => state.groceryItems.data;

export const selectGroceryItemsStatus = (state: RootState) =>
  state.groceryItems.status;

export const selectGroceryItemsLength = (state: RootState) =>
  state.groceryItems.data.length;
