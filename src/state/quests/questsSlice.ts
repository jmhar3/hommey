import { createSlice } from "@reduxjs/toolkit";

import { fetchQuests, deleteQuest, upsertQuests } from "./questsThunks";

import type { RootState } from "../store";
import type { Quest } from "../types";

export interface QuestsState {
  data: Quest[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: QuestsState = {
  data: [],
  status: "idle",
};

const questsSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(upsertQuests.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        upsertQuests.fulfilled,
        (state, { payload }: { payload: Quest[] }) => {
          state.status = "succeeded";

          const newQuests: Quest[] = [];
          const oldQuests: Quest[] = [];

          payload.forEach((item: Quest) => {
            if (state.data.find(({ id }) => id === item.id)) {
              oldQuests.push(item);
            } else {
              newQuests.push(item);
            }
          });

          const filteredState = state.data.filter(
            ({ id: id1 }) => !payload.find(({ id: id2 }) => id1 === id2),
          );

          state.data = [...filteredState, ...oldQuests, ...newQuests];
        },
      )
      .addCase(upsertQuests.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteQuest.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteQuest.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteQuest.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default questsSlice.reducer;

export const selectQuests = (state: RootState) => state.quests.data;

export const selectQuestById = (state: RootState, questId: string) =>
  state.quests.data.find((quest) => quest.id === questId);

export const selectQuestsStatus = (state: RootState) => state.quests.status;

export const selectQuestsLength = (state: RootState) =>
  state.quests.data.length;
