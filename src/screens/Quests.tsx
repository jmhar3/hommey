import { Box, Group, Stack } from "@mantine/core";

import { colours, shadow } from "../helpers/theme";

function Quests() {
  return (
    <Stack p="xs" h="100vh" gap="xs" bg={colours.mid} {...shadow}>
      Quests
      <Group grow gap="xs">
        <Box h="12.5em" bg={colours.light} {...shadow}>
          BOSS
        </Box>

        <Stack gap="xs">
          <Box h="6em" bg={colours.light} {...shadow}>
            Wah
          </Box>

          <Box h="6em" bg={colours.light} {...shadow}>
            Fae
          </Box>
        </Stack>
      </Group>
    </Stack>
  );
}

export default Quests;
