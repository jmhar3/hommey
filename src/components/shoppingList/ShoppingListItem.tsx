import { Checkbox } from "@mantine/core";

import { useAppDispatch } from "../../state/hooks";
import { deleteShoppingListItem } from "../../state/shoppingList/shoppingListThunks";

import { colours } from "../../helpers/theme";

import type { ShoppingListItem as ShoppingListItemType } from "../../state/types";

function ShoppingListItem(item: ShoppingListItemType) {
  const dispatch = useAppDispatch();

  const checkItem = () => {
    dispatch(deleteShoppingListItem(item.id));
  };

  return (
    <Checkbox
      w="100%"
      size="lg"
      key={item.id}
      color={colours.contrast}
      iconColor={colours.dark}
      label={item.label.toUpperCase()}
      onChange={checkItem}
      styles={{
        input: {
          borderRadius: 0,
          background: colours.mid,
          border: `solid 4px ${colours.dark}`,
          boxShadow: `3px 3px 0px 1px ${colours.contrast}`,
        },
      }}
    />
  );
}

export default ShoppingListItem;
