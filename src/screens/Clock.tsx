import { Stack } from "@mantine/core";

import { colours, shadow } from "../helpers/theme";

function Clock() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Clock
    </Stack>
  );
}

export default Clock;
