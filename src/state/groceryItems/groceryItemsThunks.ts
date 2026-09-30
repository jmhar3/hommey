import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

export const fetchGroceryItems = createAsyncThunk(
  "groceryItem/fetchGroceryItems",
  async () => {
    const { data, error } = await supabase
      .from("grocery_items")
      .select(`*, shop(*)`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const addGroceryItem = createAsyncThunk(
  "groceryItems/addGroceryItem",
  async (item: { label: string; shop: string }) => {
    const { data, error } = await supabase
      .from("grocery_items")
      .insert(item)
      .select(`*, shop(*)`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data[0];
  },
);

export const deleteGroceryItem = createAsyncThunk(
  "groceryItems/deleteGroceryItem",
  async (id: string) => {
    const { error } = await supabase
      .from("grocery_items")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
