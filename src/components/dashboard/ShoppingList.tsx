import { Stack, Title } from "@mantine/core";

import Container from "../Container";
import ShoppingListItems from "../shoppingList/ShoppingListItems";

function ShoppingList() {
  return (
    <Container>
      <Stack pb="xs">
        <Title>Shopping List</Title>

        <ShoppingListItems view="list" />
      </Stack>
    </Container>
  );
}

export default ShoppingList;
