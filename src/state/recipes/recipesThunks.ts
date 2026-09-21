import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { Recipe } from "../types";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const { data, error } = await supabase
      .from("recipes")
      .select(`*`)
      .order("created_at");

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const insertRecipe = createAsyncThunk(
  "recipes/insertRecipe",
  async (recipe: Recipe) => {
    const { data, error } = await supabase
      .from("recipes")
      .insert(recipe)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data[0];
  },
);

export const updateRecipe = createAsyncThunk(
  "recipes/updateRecipe",
  async ({ id, ...recipe }: Recipe) => {
    const { error } = await supabase
      .from("recipes")
      .update(recipe)
      .eq("id", id)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return { id: id, ...recipe };
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
