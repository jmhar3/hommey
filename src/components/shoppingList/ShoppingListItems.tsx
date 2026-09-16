import { useEffect, useMemo, useState } from "react";
import {
  Checkbox,
  Accordion,
  Stack,
  Title,
  Divider,
  Switch,
  Flex,
  Text,
} from "@mantine/core";

import {
  FaDog,
  FaFish,
  FaCarrot,
  FaCheese,
  FaBreadSlice,
  FaCookieBite,
  FaDrumstickBite,
  FaClinicMedical,
} from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../state/hooks";

import {
  fetchShoppingList,
  deleteShoppingListItem,
} from "../../state/shoppingList/shoppingListThunks";

import {
  selectShoppingList,
  selectShoppingListStatus,
} from "../../state/shoppingList/shoppingListSlice";

import { colours, lightInset } from "../../helpers/theme";
import ShoppingListItem from "./ShoppingListItem";

const categories = [
  { category: "Fishmonger", icon: <FaFish /> },
  { category: "Butcher", icon: <FaDrumstickBite /> },
  { category: "Supermarket", icon: <FaCookieBite /> },
  { category: "Deli", icon: <FaCheese /> },
  { category: "Bakery", icon: <FaBreadSlice /> },
  { category: "GreenGrocer", icon: <FaCarrot /> },
  { category: "Chemist", icon: <FaClinicMedical /> },
  { category: "Other", icon: <FaDog /> },
];

interface ShoppingListItemsProps {
  view?: "list" | "categories";
}

function ShoppingListItems({ view }: ShoppingListItemsProps) {
  const dispatch = useAppDispatch();

  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const shoppingList = useAppSelector(selectShoppingList);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, shoppingListStatus]);

  const [showList, setShowList] = useState(view === "list");

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
      <Stack gap={showList ? "xs" : "0"}>
        {!view && (
          <Flex align="center" justify="center" gap="xs">
            <Text size="lg" w="100%" ta="right">
              VIEW CATEGORIES
            </Text>

            <Switch
              size="lg"
              radius={0}
              checked={showList}
              // label="VIEW CATEGORIES"
              color={colours.contrast}
              withThumbIndicator={false}
              onChange={(event) => setShowList(event.currentTarget.checked)}
              styles={{
                track: {
                  padding: "1.5em",
                  background: colours.white,
                  border: `solid 3px ${colours.dark}`,
                },
                thumb: {
                  background: showList ? "crimson" : colours.blue,
                  border: `solid 3px ${colours.dark}`,
                },
              }}
            />

            <Text size="lg" w="100%">
              VIEW LIST
            </Text>
          </Flex>
        )}

        {showList ? (
          <Stack gap="xs">
            <Divider mb="5" bd={`2px solid ${colours.contrast}`} />

            {shoppingList.map((item) => (
              <ShoppingListItem key={item.id} {...item} />
            ))}
          </Stack>
        ) : (
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
        )}
      </Stack>
    );
}

export default ShoppingListItems;
