import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";

interface ListItem {
  id: string;
  label: string;
  bought: boolean;
}

function ShoppingList() {
  const [input, setInput] = useState<string>();
  const [list, setList] = useState<ListItem[]>([]);

  const checkItem = (item: ListItem, bought: boolean) => {
    setList((prevList) =>
      prevList.map((listItem) =>
        listItem.id === item.id ? { ...item, bought } : listItem,
      ),
    );
  };

  const addNewItem = () => {
    if (input) setList([...list, { id: "", label: input, bought: false }]);
  };

  return (
    <Stack p="xs" bdrs="3" bd="solid 2px brown">
      <Title>Shopping List</Title>

      {list.length > 0 && (
        <>
          <Divider size="sm" color="brown" />

          {list.map((item) => (
            <Checkbox
              size="lg"
              key={item.id}
              color="brown"
              label={item.label}
              checked={item.bought}
              onChange={(event) => checkItem(item, event.currentTarget.checked)}
            />
          ))}
        </>
      )}

      <Divider size="sm" color="brown" />

      <Flex gap="xs" align="center">
        <TextInput
          w="100%"
          size="lg"
          placeholder="Add New Item"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />

        <Button p="0" size="lg" w="3.3em" color="brown" onClick={addNewItem}>
          +
        </Button>
      </Flex>
    </Stack>
  );
}

export default ShoppingList;
