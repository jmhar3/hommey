import { Box } from "@mantine/core";

import ShoppingListScreen from "../screens/ShoppingList.tsx";

import Theme from "../helpers/theme.ts";

function ShoppingList() {
  const { colours } = Theme();

  return (
    <Box bg={colours.mid} mih="100vh">
      <ShoppingListScreen />
    </Box>
  );
}

export default ShoppingList;
