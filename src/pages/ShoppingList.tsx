import { Box } from "@mantine/core";

import ShoppingListScreen from "../screens/ShoppingList.tsx";

import Theme from "../helpers/theme.ts";

function ShoppingList() {
  const { inset } = Theme();

  return (
    <Box {...inset} h="100vh">
      <ShoppingListScreen />
    </Box>
  );
}

export default ShoppingList;
