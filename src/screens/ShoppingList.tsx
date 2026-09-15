import { Stack } from "@mantine/core";

import ListComponent from "../components/dashboard/ShoppingList";

import { colours, shadow } from "../helpers/theme";

function ShoppingList() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      <ListComponent />
    </Stack>
  );
}

export default ShoppingList;
