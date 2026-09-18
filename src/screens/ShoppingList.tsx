import { Box, Stack } from "@mantine/core";

import ShoppingListItems from "../components/shoppingList/ShoppingListItems";
import ShoppingListItemForm from "../components/shoppingList/ShoppingListItemForm";

import Container from "../components/Container";

import Theme from "../helpers/theme";

function ShoppingList() {
  const { colours } = Theme();

  return (
    <Stack p="xs" gap="xs">
      <Container>
        <ShoppingListItemForm />
      </Container>

      <Box p="xs" bd={`dotted 4px ${colours.blue}`}>
        <ShoppingListItems />
      </Box>
    </Stack>
  );
}

export default ShoppingList;
