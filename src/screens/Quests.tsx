import { Box, Grid, Group, Stack } from "@mantine/core";

import Quests from "../components/dashboard/Quests";

import { colours, shadow } from "../helpers/theme";

function BossBattle() {
  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={4}>
          <Quests />
        </Grid.Col>

        <Grid.Col span={8}>
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
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default BossBattle;
