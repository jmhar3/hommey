import { useMemo, useState } from "react";

import {
  Accordion,
  Stack,
  Title,
  Divider,
  Switch,
  Flex,
  Text,
} from "@mantine/core";

import ShoppingListItem from "./ShoppingListItem";

import { useAppSelector } from "../../state/hooks";
import { selectShops } from "../../state/shops/shopsSlice";
import { selectShoppingList } from "../../state/shoppingList/shoppingListSlice";

import Theme from "../../helpers/theme";

interface ShoppingListItemsProps {
  view?: "list" | "categories";
}

function ShoppingListItems({ view }: ShoppingListItemsProps) {
  const { colours, lightInset, switchStyle } = Theme();

  const shoppingList = useAppSelector(selectShoppingList);
  const shops = useAppSelector(selectShops);

  const [showList, setShowList] = useState(view === "list");

  const categorisedList = useMemo(
    () =>
      shops.map((shop) => ({
        items: shoppingList.filter((item) => item.item.shop.id === shop.id),
        ...shop,
      })),
    [shops, shoppingList],
  );

  if (categorisedList.length > 0)
    return (
      <Stack gap={showList ? "xs" : "0"}>
        {!view && (
          <Flex align="center" justify="center" gap="xs">
            <Text size="lg" w="100%" ta="right">
              CATEGORIES
            </Text>

            <Switch
              checked={showList}
              {...switchStyle(showList)}
              onChange={(event) => setShowList(event.currentTarget.checked)}
            />

            <Text size="lg" w="100%">
              LIST
            </Text>
          </Flex>
        )}

        {showList ? (
          <Stack gap="xs">
            <Divider mb="5" size="lg" color={colours.contrast} />

            {categorisedList.flatMap(({ items }) =>
              items.length > 0
                ? items.map((item) => (
                    <ShoppingListItem key={item.id} {...item} />
                  ))
                : undefined,
            )}
          </Stack>
        ) : (
          <Accordion
            radius={0}
            variant="separated"
            defaultValue={
              categorisedList.find(({ items }) => items.length > 0)?.id
            }
          >
            {categorisedList.map(
              (categoryList) =>
                categoryList.items.length > 0 && (
                  <Accordion.Item
                    mt="xs"
                    {...lightInset}
                    bg={colours.white}
                    key={categoryList.id}
                    value={categoryList.id}
                  >
                    <Accordion.Control>
                      <Title size="xl">{categoryList.label}</Title>
                    </Accordion.Control>

                    <Accordion.Panel>
                      <Stack gap="xs">
                        <Divider mb="5" size="lg" color={colours.contrast} />

                        {categoryList.items.map((item) => (
                          <ShoppingListItem key={item.id} {...item} />
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
