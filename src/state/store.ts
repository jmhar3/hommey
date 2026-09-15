import { configureStore } from "@reduxjs/toolkit";

import recipesReducer from "./recipes/recipesSlice";
import shoppingListReducer from "./shoppingList/shoppingListSlice";

import type { Action, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
