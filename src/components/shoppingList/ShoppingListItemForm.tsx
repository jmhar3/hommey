import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Flex, Stack, Select, TextInput, ActionIcon } from "@mantine/core";

import { useAppDispatch } from "../../state/hooks";
import { addShoppingListItem } from "../../state/shoppingList/shoppingListThunks";

import { colours, contrastInset } from "../../helpers/theme";

function ShoppingListItemForm({ onComplete }: { onComplete?: () => void }) {
  const dispatch = useAppDispatch();

  const [label, setLabel] = useState<string>();
  const [category, setCategory] = useState<
    | "deli"
    | "butcher"
    | "greengrocer"
    | "supermarket"
    | "fishmonger"
    | "bakery"
    | "chemist"
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
            | "chemist"
            | "other",
        }),
      ).then((data) => {
        if (data.payload) {
          if (onComplete) onComplete();
          setCategory(undefined);
          setLabel(undefined);
        }
      });
  };

  return (
    <Stack gap="xs">
      <TextInput
        pl="sm"
        h="44px"
        value={label}
        variant="unstyled"
        placeholder="Add New Item"
        onChange={(event) => setLabel(event.currentTarget.value.toUpperCase())}
        {...contrastInset}
        styles={{
          input: {
            fontSize: "1.1em",
          },
        }}
      />

      <Flex gap="xs" align="center">
        <Select
          pl="sm"
          h="44px"
          w="100%"
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
                | "bakery"
                | "chemist"
                | "other",
            )
          }
          data={[
            "SUPERMARKET",
            "GREENGROCER",
            "FISHMONGER",
            "BUTCHER",
            "BAKERY",
            "DELI",
            "CHEMIST",
            "OTHER",
          ]}
          {...contrastInset}
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

        <ActionIcon
          size="xl"
          // bg={colours.light}
          onClick={addNewItem}
          {...contrastInset}
        >
          <FaPlus />
        </ActionIcon>
      </Flex>
    </Stack>
  );
}

export default ShoppingListItemForm;
