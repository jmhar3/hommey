import { Stack } from "@mantine/core";

import { colours, shadow } from "../helpers/theme";

function Film() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Film
    </Stack>
  );
}

export default Film;
