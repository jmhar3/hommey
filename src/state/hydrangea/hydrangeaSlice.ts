import { createSlice } from "@reduxjs/toolkit";

import {
  fetchHydrangea,
  deleteHydrangea,
  upsertHydrangea,
} from "./hydrangeaThunks";

import type { RootState } from "../store";
import type { Hydrangea } from "../types";

export interface HydrangeaState {
  data: Hydrangea[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: HydrangeaState = {
  data: [],
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
        state.data = action.payload;
      })
      .addCase(fetchHydrangea.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(upsertHydrangea.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        upsertHydrangea.fulfilled,
        (state, { payload }: { payload: Hydrangea[] }) => {
          state.status = "succeeded";

          const newSections: Hydrangea[] = [];
          const oldSections: Hydrangea[] = [];

          payload.forEach((item: Hydrangea) => {
            if (state.data.find(({ id }) => id === item.id)) {
              oldSections.push(item);
            } else {
              newSections.push(item);
            }
          });

          const filteredState = state.data.filter(
            ({ id: id1 }) => !payload.find(({ id: id2 }) => id1 === id2),
          );

          state.data = [...filteredState, ...oldSections, ...newSections];
        },
      )
      .addCase(upsertHydrangea.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteHydrangea.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteHydrangea.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteHydrangea.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default hydrangeaSlice.reducer;

export const selectHydrangea = (state: RootState) => state.hydrangea.data[0];

export const selectAllHydrangea = (state: RootState) => state.hydrangea.data;

export const selectHydrangeaStatus = (state: RootState) =>
  state.hydrangea.status;
