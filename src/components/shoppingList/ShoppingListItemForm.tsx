import { useDisclosure } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
  Flex,
  Text,
  Stack,
  Select,
  Button,
  Divider,
  TextInput,
  ActionIcon,
} from "@mantine/core";

import { useAppSelector } from "../../state/hooks";
import { useAppDispatch } from "../../state/hooks";
import { selectShops } from "../../state/shops/shopsSlice";
import { selectGroceryItems } from "../../state/groceryItems/groceryItemsSlice";
import { addShoppingListItem } from "../../state/shoppingList/shoppingListThunks";
import { addGroceryItem } from "../../state/groceryItems/groceryItemsThunks";

import type { GroceryItem, Shop } from "../../state/types";

import Theme from "../../helpers/theme";
import Container from "../Container";

function ShoppingListItemForm(props: { onComplete?: () => void }) {
  const { colours, button, input, contrastShadow } = Theme();

  const dispatch = useAppDispatch();
  const shops = useAppSelector(selectShops);
  const groceryItems = useAppSelector(selectGroceryItems);

  const [showForm, { open, close }] = useDisclosure();

  const [item, setItem] = useState<GroceryItem | null>(null);
  const [label, setLabel] = useState<string>("");
  const [shop, setShop] = useState<Shop | null>(null);

  const findExistingItem = useMemo(() => {
    return groceryItems.find(
      (groceryitem) => groceryitem.label.toLowerCase() === label.toLowerCase(),
    );
  }, [label, groceryItems]);

  if (findExistingItem && item !== findExistingItem) setItem(findExistingItem);

  const onComplete = () => {
    if (props.onComplete) props.onComplete();
    setItem(null);
    setShop(null);
    setLabel("");
    close();
  };

  const addExistingItem = () => {
    if (item) {
      dispatch(addShoppingListItem(item.id)).then((data) => {
        if (data.payload) onComplete();
      });
    }
  };

  const addNewItem = () => {
    if (label && shop) {
      dispatch(
        addGroceryItem({
          label: label,
          shop: shop.id,
        }),
      ).then((data) => {
        if (data.payload) {
          dispatch(addShoppingListItem(data.payload.id)).then((data) => {
            if (data.payload) onComplete();
          });
        }
      });
    }
  };

  if (showForm)
    return (
      <Container>
        <Stack gap="xs">
          <Flex gap="xs" align="center">
            <Select
              {...input}
              searchable
              value={item?.id}
              placeholder="SELECT ITEM"
              onChange={(id) =>
                setItem(groceryItems.find((item) => item.id === id) || null)
              }
              data={groceryItems.map((item) => ({
                value: item.id,
                label: item.label.toUpperCase(),
              }))}
              styles={{
                dropdown: {
                  borderRadius: 0,
                  background: colours.light,
                  border: `solid 4px ${colours.dark}`,
                  boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
                },
                input: {
                  fontSize: "1.1em",
                },
                option: {
                  fontSize: "1.1em",
                },
              }}
            />

            <ActionIcon size="xl" onClick={addExistingItem} {...contrastShadow}>
              <FaPlus />
            </ActionIcon>
          </Flex>

          <Divider c={colours.blue} color={colours.blue} size="lg" label="OR" />

          <TextInput
            value={label.toUpperCase()}
            placeholder="ADD NEW ITEM"
            onChange={(event) =>
              setLabel(event.currentTarget.value.toUpperCase())
            }
            {...input}
          />

          <Flex gap="xs" align="center">
            <Select
              {...input}
              value={shop?.id}
              placeholder="SELECT SHOP"
              onChange={(id) =>
                setShop(shops.find((shop) => shop.id === id) || null)
              }
              data={shops.map((item) => ({
                value: item.id,
                label: item.label.toUpperCase(),
              }))}
              styles={{
                dropdown: {
                  borderRadius: 0,
                  background: colours.light,
                  border: `solid 4px ${colours.dark}`,
                  boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
                },
                input: {
                  fontSize: "1.1em",
                },
                option: {
                  fontSize: "1.1em",
                },
              }}
            />

            <ActionIcon size="xl" onClick={addNewItem} {...contrastShadow}>
              <FaPlus />
            </ActionIcon>
          </Flex>

          {findExistingItem && (
            <Text c="crimson">WARNING: ITEM ALREADY EXISTS</Text>
          )}
        </Stack>
      </Container>
    );

  return (
    <Button {...button} onClick={open}>
      ADD NEW ITEM
    </Button>
  );
}

export default ShoppingListItemForm;
