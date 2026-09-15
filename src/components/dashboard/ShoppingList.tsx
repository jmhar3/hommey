import { Divider, Stack, Title } from "@mantine/core";

import Container from "../Container";
import ShoppingListItems from "../ShoppingListItems";
import ShoppingListItemForm from "../ShoppingListItemForm";

import { colours } from "../../helpers/theme";

function ShoppingList() {
  return (
    <Container>
      <Stack>
        <Title>Shopping List</Title>

        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

        <ShoppingListItems />

        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

        <ShoppingListItemForm />
      </Stack>
    </Container>
  );
}

export default ShoppingList;
