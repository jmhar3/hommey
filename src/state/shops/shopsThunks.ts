import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { Shop } from "../types";

export const fetchShops = createAsyncThunk("shops/fetchShops", async () => {
  const { data, error } = await supabase.from("shops").select(`*`);

  if (error) {
    console.error(error);
    throw Error(error.message);
  }

  return data;
});

export const addShop = createAsyncThunk(
  "shops/addShop",
  async (item: Partial<Shop>) => {
    const { data, error } = await supabase
      .from("shops")
      .insert(item)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const deleteShop = createAsyncThunk(
  "shops/deleteShop",
  async (id: string) => {
    const { error } = await supabase.from("shops").delete().eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
