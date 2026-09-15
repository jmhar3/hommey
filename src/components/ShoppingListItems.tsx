import { useEffect, useMemo } from "react";
import { Checkbox, Accordion, Stack, Title, Divider } from "@mantine/core";
import {
  FaBreadSlice,
  FaCarrot,
  FaCheese,
  FaCookieBite,
  FaDog,
  FaDrumstickBite,
  FaFish,
} from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../state/hooks";

import {
  fetchShoppingList,
  deleteShoppingListItem,
} from "../state/shoppingList/shoppingListThunks";

import {
  selectShoppingList,
  selectShoppingListStatus,
} from "../state/shoppingList/shoppingListSlice";
import { colours, lightInset } from "../helpers/theme";

const categories = [
  { category: "Fishmonger", icon: <FaFish /> },
  { category: "Butcher", icon: <FaDrumstickBite /> },
  { category: "Supermarket", icon: <FaCookieBite /> },
  { category: "Deli", icon: <FaCheese /> },
  { category: "Bakery", icon: <FaBreadSlice /> },
  { category: "GreenGrocer", icon: <FaCarrot /> },
  { category: "Other", icon: <FaDog /> },
];

function ShoppingListItems() {
  const dispatch = useAppDispatch();

  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const shoppingList = useAppSelector(selectShoppingList);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, shoppingListStatus]);

  const categorisedList = useMemo(
    () =>
      categories.map((category) => ({
        items: shoppingList.filter(
          (item) => item.type === category.category.toLowerCase(),
        ),
        ...category,
      })),
    [shoppingList],
  );

  const checkItem = (id: string) => {
    dispatch(deleteShoppingListItem(id));
  };

  if (categorisedList.length > 0)
    return (
      <Accordion
        radius={0}
        variant="separated"
        defaultValue={
          categorisedList.find(({ items }) => items.length > 0)?.category
        }
      >
        {categorisedList.map(
          (categoryList) =>
            categoryList.items.length > 0 && (
              <Accordion.Item
                my="xs"
                {...lightInset}
                bg={colours.white}
                key={categoryList.category}
                value={categoryList.category}
              >
                <Accordion.Control icon={categoryList.icon}>
                  <Title size="xl">{categoryList.category}</Title>
                </Accordion.Control>

                <Accordion.Panel>
                  <Stack gap="xs">
                    <Divider mb="5" bd={`2px solid ${colours.contrast}`} />
                    {categoryList.items.map((item) => (
                      <Checkbox
                        size="lg"
                        key={item.id}
                        color="brown"
                        label={item.label.toUpperCase()}
                        onChange={() => checkItem(item.id)}
                        styles={{
                          input: {
                            borderRadius: 0,
                            background: colours.mid,
                            border: `solid 4px ${colours.dark}`,
                            boxShadow: `3px 3px 0px 1px ${colours.contrast}`,
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            ),
        )}
      </Accordion>
    );
}

export default ShoppingListItems;
