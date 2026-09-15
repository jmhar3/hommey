import { configureStore } from "@reduxjs/toolkit";

import questsReducer from "./quests/questsSlice";
import recipesReducer from "./recipes/recipesSlice";
import hydrangeaReducer from "./hydrangea/hydrangeaSlice";
import shoppingListReducer from "./shoppingList/shoppingListSlice";

import type { Action, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    quests: questsReducer,
    recipes: recipesReducer,
    hydrangea: hydrangeaReducer,
    shoppingList: shoppingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
