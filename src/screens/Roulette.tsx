import { Stack } from "@mantine/core";

import { colours, shadow } from "../helpers/theme";

function Roulette() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Roulette
    </Stack>
  );
}

export default Roulette;
