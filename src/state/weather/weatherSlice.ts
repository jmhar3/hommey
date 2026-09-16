import { createSlice } from "@reduxjs/toolkit";

import { fetchWeather } from "./weatherThunks";

import type { RootState } from "../store";
import type { Weather } from "../types";

export interface WeatherState {
  data: Weather | null;
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: WeatherState = {
  data: null,
  status: "idle",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default weatherSlice.reducer;

export const selectWeather = (state: RootState) => state.weather.data;

export const selectWeatherStatus = (state: RootState) => state.weather.status;
