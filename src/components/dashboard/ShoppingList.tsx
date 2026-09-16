import { Button, Divider, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Container from "../Container";
import ShoppingListItems from "../shoppingList/ShoppingListItems";
import ShoppingListItemForm from "../shoppingList/ShoppingListItemForm";

import { colours, contrastInset } from "../../helpers/theme";

function ShoppingList() {
  const [showForm, { open, close }] = useDisclosure();

  return (
    <Container>
      <Stack pb="xs">
        <Title>Shopping List</Title>

        <ShoppingListItems view="list" />

        <Divider bd={`2px solid ${colours.contrast}`} />

        {showForm ? (
          <ShoppingListItemForm onComplete={close} />
        ) : (
          <Button {...contrastInset} onClick={open}>
            ADD NEW ITEM
          </Button>
        )}
      </Stack>
    </Container>
  );
}

export default ShoppingList;
