import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { Hydrangea } from "../types";

export const fetchHydrangea = createAsyncThunk(
  "hydrangea/fetchHydrangea",
  async () => {
    const { data, error } = await supabase
      .from("hydrangea")
      .select(`*`)
      .order("created_at");

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const upsertHydrangea = createAsyncThunk(
  "hydrangea/upsertHydrangea",
  async (hydrangea: Partial<Hydrangea>[]) => {
    const { data, error } = await supabase
      .from("hydrangea")
      .upsert(hydrangea)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const deleteHydrangea = createAsyncThunk(
  "hydrangea/deleteHydrangea",
  async (id: string) => {
    const { error } = await supabase.from("hydrangea").delete().eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
