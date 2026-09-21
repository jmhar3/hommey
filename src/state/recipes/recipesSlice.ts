import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRecipes,
  deleteRecipe,
  updateRecipe,
  insertRecipe,
} from "./recipesThunks";

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
      .addCase(insertRecipe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        insertRecipe.fulfilled,
        (state, { payload }: { payload: Recipe }) => {
          state.status = "succeeded";

          state.data = [...state.data, payload];
        },
      )
      .addCase(insertRecipe.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateRecipe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        updateRecipe.fulfilled,
        (state, { payload }: { payload: Recipe }) => {
          state.status = "succeeded";

          state.data = state.data.map((recipe) =>
            recipe.id === payload.id ? payload : recipe,
          );
        },
      )
      .addCase(updateRecipe.rejected, (state) => {
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

export const selectRecipeById = (state: RootState, recipeId: string) =>
  state.recipes.data.find((recipe) => recipe.id === recipeId);

export const selectRecipesStatus = (state: RootState) => state.recipes.status;

export const selectRecipesLength = (state: RootState) =>
  state.recipes.data.length;
