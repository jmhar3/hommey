import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { Recipe } from "../types";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const { data, error } = await supabase.from("recipes").select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const upsertRecipes = createAsyncThunk(
  "recipes/upsertRecipes",
  async (recipes: Partial<Recipe>[]) => {
    const { data, error } = await supabase
      .from("recipes")
      .upsert(recipes)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id: string) => {
    const { error } = await supabase.from("recipes").delete().eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
