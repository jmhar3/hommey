import { Stack } from "@mantine/core";

import ShoppingListItems from "../components/ShoppingListItems";
import ShoppingListItemForm from "../components/ShoppingListItemForm";

import Container from "../components/Container";

function ShoppingList() {
  return (
    <Stack p="xs" gap="0">
      <Container>
        <ShoppingListItemForm />
      </Container>

      <ShoppingListItems />
    </Stack>
  );
}

export default ShoppingList;
