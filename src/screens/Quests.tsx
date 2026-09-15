import { Stack } from "@mantine/core";

import { colours, shadow } from "../helpers/theme";

function Quests() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Quests
    </Stack>
  );
}

export default Quests;
