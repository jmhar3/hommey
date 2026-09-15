import { createAsyncThunk } from "@reduxjs/toolkit";

import supabase from "../../helpers/supabaseClient";

import type { Quest } from "../types";

export const fetchQuests = createAsyncThunk("quests/fetchQuests", async () => {
  const { data, error } = await supabase.from("quests").select(`*`);

  if (error) {
    console.error(error);
    throw Error(error.message);
  }

  return data;
});

export const upsertQuests = createAsyncThunk(
  "quests/upsertQuests",
  async (quests: Partial<Quest>[]) => {
    const { data, error } = await supabase
      .from("quests")
      .upsert(quests)
      .select(`*`);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return data;
  },
);

export const deleteQuest = createAsyncThunk(
  "quests/deleteQuest",
  async (id: string) => {
    const { error } = await supabase.from("quests").delete().eq("id", id);

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    return id;
  },
);
