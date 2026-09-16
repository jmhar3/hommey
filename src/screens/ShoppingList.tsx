import { Stack } from "@mantine/core";

import ShoppingListItems from "../components/shoppingList/ShoppingListItems";
import ShoppingListItemForm from "../components/shoppingList/ShoppingListItemForm";

import Container from "../components/Container";

function ShoppingList() {
  return (
    <Stack p="xs" gap="xs">
      <Container>
        <ShoppingListItemForm />
      </Container>

      <ShoppingListItems />
    </Stack>
  );
}

export default ShoppingList;
