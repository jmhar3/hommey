import { createAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface DarkModeState {
  value: boolean;
}

const initialState: DarkModeState = { value: true };

const toggle = (state: DarkModeState) => {
  state.value = !state.value;
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    toggle: toggle,
  },
});

export default darkModeSlice.reducer;

// export const { toggle } = darkModeSlice.actions;

export const toggleDarkMode = createAction<boolean>("darkMode/toggle");

export const selectDarkMode = (state: RootState) => state.darkMode.value;
