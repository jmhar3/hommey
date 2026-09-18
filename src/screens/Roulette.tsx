import { Stack } from "@mantine/core";

import Theme from "../helpers/theme";

function Roulette() {
  const { colours, shadow } = Theme();

  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Roulette
    </Stack>
  );
}

export default Roulette;
