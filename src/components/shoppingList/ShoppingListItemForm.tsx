import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Flex, Stack, Select, TextInput, ActionIcon } from "@mantine/core";

import { useAppDispatch } from "../../state/hooks";
import { addShoppingListItem } from "../../state/shoppingList/shoppingListThunks";

import Theme from "../../helpers/theme";

function ShoppingListItemForm({ onComplete }: { onComplete?: () => void }) {
  const { colours, contrastShadow, input } = Theme();

  const dispatch = useAppDispatch();

  const [label, setLabel] = useState<string>("");
  const [category, setCategory] = useState<string | null>(null);

  const addNewItem = () => {
    if (label && category)
      dispatch(
        addShoppingListItem({
          label: label,
          type: category.toLowerCase() as
            | "other"
            | "deli"
            | "butcher"
            | "greengrocer"
            | "supermarket"
            | "fishmonger"
            | "bakery"
            | "chemist",
        }),
      ).then((data) => {
        if (data.payload) {
          if (onComplete) onComplete();
          setCategory(null);
          setLabel("");
        }
      });
  };

  return (
    <Stack gap="xs">
      <TextInput
        value={label}
        placeholder="Add New Item"
        onChange={(event) => setLabel(event.currentTarget.value.toUpperCase())}
        {...input}
      />

      <Flex gap="xs" align="center">
        <Select
          {...input}
          value={category}
          placeholder="Select category"
          onChange={(value) => setCategory(value)}
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
    </Stack>
  );
}

export default ShoppingListItemForm;
