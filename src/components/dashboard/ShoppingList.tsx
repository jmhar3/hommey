import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import {
  ActionIcon,
  Checkbox,
  Divider,
  Flex,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

import Container from "../Container";

import { useAppDispatch, useAppSelector } from "../../state/hooks";

import {
  addShoppingListItem,
  deleteShoppingListItem,
  fetchShoppingList,
} from "../../state/shoppingList/shoppingListThunks";

import {
  selectShoppingList,
  selectShoppingListStatus,
} from "../../state/shoppingList/shoppingListSlice";

import { colours, inset } from "../../helpers/theme";

function ShoppingList() {
  const dispatch = useAppDispatch();

  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const shoppingList = useAppSelector(selectShoppingList);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, shoppingListStatus]);

  const [label, setLabel] = useState<string>();
  const [category, setCategory] = useState<
    "deli" | "butcher" | "greengrocer" | "supermarket" | "fishmonger" | "other"
  >();

  const checkItem = (id: string) => {
    dispatch(deleteShoppingListItem(id));
  };

  const addNewItem = () => {
    if (label && category)
      dispatch(
        addShoppingListItem({
          label: label,
          type: category.toLowerCase() as
            | "deli"
            | "butcher"
            | "greengrocer"
            | "supermarket"
            | "fishmonger"
            | "other",
        }),
      );
  };

  return (
    <Container>
      <Stack>
        <Title>Shopping List</Title>

        {shoppingList.length > 0 && (
          <>
            <Divider size="sm" color="brown" />

            {shoppingList.map((item) => (
              <Checkbox
                size="lg"
                key={item.id}
                color="brown"
                label={item.label}
                onChange={() => checkItem(item.id)}
              />
            ))}
          </>
        )}

        <Divider size="sm" color="brown" />

        <Stack>
          <TextInput
            pl="sm"
            size="md"
            variant="unstyled"
            {...inset}
            placeholder="Add New Item"
            value={label}
            onChange={(event) => setLabel(event.currentTarget.value)}
          />

          <Flex gap="xs" align="center">
            <Select
              pl="sm"
              size="md"
              variant="unstyled"
              placeholder="Select category"
              onChange={(value) =>
                setCategory(
                  value as
                    | "deli"
                    | "butcher"
                    | "greengrocer"
                    | "supermarket"
                    | "fishmonger"
                    | "other",
                )
              }
              data={[
                "Deli",
                "Butcher",
                "GreenGrocer",
                "SuperMarket",
                "FishMonger",
                "Other",
              ]}
              {...inset}
            />

            <ActionIcon
              size="xl"
              bg={colours.light}
              onClick={addNewItem}
              {...inset}
            >
              <FaPlus />
            </ActionIcon>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShoppingList;
