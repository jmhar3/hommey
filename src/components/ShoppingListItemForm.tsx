import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Flex, Stack, Select, TextInput, ActionIcon } from "@mantine/core";

import { useAppDispatch } from "../state/hooks";
import { addShoppingListItem } from "../state/shoppingList/shoppingListThunks";

import { colours, inset } from "../helpers/theme";

function ShoppingListItemForm() {
  const dispatch = useAppDispatch();

  const [label, setLabel] = useState<string>();
  const [category, setCategory] = useState<
    | "deli"
    | "butcher"
    | "greengrocer"
    | "supermarket"
    | "fishmonger"
    | "bakery"
    | "other"
  >();

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
            | "bakery"
            | "other",
        }),
      );
  };

  return (
    <Stack>
      <TextInput
        pl="sm"
        size="md"
        value={label}
        variant="unstyled"
        placeholder="Add New Item"
        onChange={(event) => setLabel(event.currentTarget.value)}
        {...inset}
      />

      <Flex gap="xs" align="center">
        <Select
          pl="sm"
          w="100%"
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
  );
}

export default ShoppingListItemForm;
