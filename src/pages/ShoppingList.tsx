import { useEffect } from "react";
import { Box } from "@mantine/core";

import ShoppingListScreen from "../screens/ShoppingList.tsx";

import { useAppDispatch, useAppSelector } from "../state/hooks.ts";

import { selectGroceryItemsStatus } from "../state/groceryItems/groceryItemsSlice.ts";
import { fetchGroceryItems } from "../state/groceryItems/groceryItemsThunks.ts";

import { selectShoppingListStatus } from "../state/shoppingList/shoppingListSlice.ts";
import { fetchShoppingList } from "../state/shoppingList/shoppingListThunks.ts";

import { selectShopsStatus } from "../state/shops/shopsSlice.ts";
import { fetchShops } from "../state/shops/shopsThunks.ts";

import Theme from "../helpers/theme.ts";

function ShoppingList() {
  const { colours } = Theme();

  const dispatch = useAppDispatch();
  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const groceryItemsStatus = useAppSelector(selectGroceryItemsStatus);
  const shopsStatus = useAppSelector(selectShopsStatus);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
    if (groceryItemsStatus === "idle") {
      dispatch(fetchGroceryItems());
    }
    if (shopsStatus === "idle") {
      dispatch(fetchShops());
    }
  }, [dispatch, shoppingListStatus, groceryItemsStatus, shopsStatus]);

  return (
    <Box bg={colours.mid} mih="100vh">
      <ShoppingListScreen />
    </Box>
  );
}

export default ShoppingList;
