import { createSlice } from "@reduxjs/toolkit";

import { fetchRecipes, deleteRecipe, upsertRecipes } from "./recipesThunks";

import type { RootState } from "../store";
import type { Recipe } from "../types";

export interface RecipesState {
  data: Recipe[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RecipesState = {
  data: [],
  status: "idle",
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(upsertRecipes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        upsertRecipes.fulfilled,
        (state, { payload }: { payload: Recipe[] }) => {
          state.status = "succeeded";

          const newSections: Recipe[] = [];
          const oldSections: Recipe[] = [];

          payload.forEach((item: Recipe) => {
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
      .addCase(upsertRecipes.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteRecipe.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data = state.data.filter(({ id }) => id !== payload);
      })
      .addCase(deleteRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default recipesSlice.reducer;

export const selectRecipes = (state: RootState) => state.recipes.data;

export const selectSectionById = (state: RootState, sectionId: string) =>
  state.recipes.data.find((section) => section.id === sectionId);

export const selectRecipesStatus = (state: RootState) => state.recipes.status;

export const selectRecipesLength = (state: RootState) =>
  state.recipes.data.length;
