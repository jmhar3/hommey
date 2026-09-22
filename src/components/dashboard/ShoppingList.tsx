import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Divider, ScrollArea, Stack, Title } from "@mantine/core";

import Container from "../Container";
import ShoppingListItem from "../shoppingList/ShoppingListItem";
import ShoppingListItemForm from "../shoppingList/ShoppingListItemForm";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { fetchShoppingList } from "../../state/shoppingList/shoppingListThunks";

import {
  selectShoppingList,
  selectShoppingListStatus,
} from "../../state/shoppingList/shoppingListSlice";

import Theme from "../../helpers/theme";

function ShoppingList() {
  const { colours, contrastShadow } = Theme();

  const [showForm, { open, close }] = useDisclosure();

  const dispatch = useAppDispatch();

  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const shoppingList = useAppSelector(selectShoppingList);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, shoppingListStatus]);

  return (
    <Container>
      <Stack pb="xs">
        <Title>Shopping List</Title>

        <Stack gap={0}>
          <Divider bd={`2px solid ${colours.contrast}`} />

          <ScrollArea
            h="25vh"
            type="auto"
            offsetScrollbars
            styles={{
              scrollbar: {
                padding: 0,
                paddingRight: "3px",
                borderRadius: 0,
                background: colours.light,
                border: `solid 4px ${colours.dark}`,
              },
              thumb: {
                borderRadius: 0,
                background: colours.contrast,
                border: `solid 2px ${colours.contrast}`,
              },
            }}
          >
            <Stack py="xs" gap="xs">
              {shoppingList.map((item) => (
                <ShoppingListItem key={item.id} {...item} />
              ))}
            </Stack>
          </ScrollArea>

          <Divider bd={`2px solid ${colours.contrast}`} />
        </Stack>

        {showForm ? (
          <ShoppingListItemForm onComplete={close} />
        ) : (
          <Button {...contrastShadow} onClick={open}>
            ADD NEW ITEM
          </Button>
        )}
      </Stack>
    </Container>
  );
}

export default ShoppingList;
