import { createSlice } from "@reduxjs/toolkit";

import {
  fetchShoppingList,
  deleteShoppingListItem,
  addShoppingListItem,
} from "./shoppingListThunks";

import type { RootState } from "../store";
import type { ShoppingListItem } from "../types";

export interface ShoppingListState {
  data: ShoppingListItem[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ShoppingListState = {
  data: [],
  status: "idle",
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingList.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchShoppingList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addShoppingListItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        addShoppingListItem.fulfilled,
        (state, { payload }: { payload: ShoppingListItem[] }) => {
          state.status = "succeeded";
          state.data = [...state.data, payload[0]];
        },
      )
      .addCase(addShoppingListItem.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteShoppingListItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteShoppingListItem.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteShoppingListItem.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default shoppingListSlice.reducer;

export const selectShoppingList = (state: RootState) => state.shoppingList.data;

export const selectSectionById = (state: RootState, sectionId: string) =>
  state.shoppingList.data.find((section) => section.id === sectionId);

export const selectShoppingListStatus = (state: RootState) =>
  state.shoppingList.status;

export const selectShoppingListLength = (state: RootState) =>
  state.shoppingList.data.length;
