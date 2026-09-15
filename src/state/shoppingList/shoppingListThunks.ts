import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { ShoppingListItem } from "../types";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async () => {
    const { data, error } = await supabase.from("shopping_list").select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const addShoppingListItem = createAsyncThunk(
  "shoppingList/addShoppingListItem",
  async (shoppingList: Partial<ShoppingListItem>) => {
    const { data, error } = await supabase
      .from("shopping_list")
      .insert(shoppingList)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const deleteShoppingListItem = createAsyncThunk(
  "shoppingList/deleteShoppingListItem",
  async (id: string) => {
    const { error } = await supabase
      .from("shopping_list")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
