import { Checkbox } from "@mantine/core";
import { FaDotCircle, FaLine } from "react-icons/fa";

import { useAppDispatch } from "../../state/hooks";
import { deleteShoppingListItem } from "../../state/shoppingList/shoppingListThunks";

import Theme from "../../helpers/theme";

import type { CheckboxProps } from "@mantine/core";
import type { ShoppingListItem as ShoppingListItemType } from "../../state/types";

function ShoppingListItem(item: ShoppingListItemType) {
  const { colours } = Theme();

  const dispatch = useAppDispatch();

  const checkItem = () => {
    dispatch(deleteShoppingListItem(item.id));
  };

  const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
    indeterminate ? <FaLine {...others} /> : <FaDotCircle {...others} />;

  return (
    <Checkbox
      w="100%"
      size="lg"
      key={item.id}
      icon={CheckboxIcon}
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
