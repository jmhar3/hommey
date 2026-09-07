import { Box, Group, Stack, Text, Title } from "@mantine/core";

function Quests() {
  return (
    <Stack p="xs" bdrs="3" bd="solid 2px brown">
      <Title>Quests</Title>

      <Stack>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
        <Text>This is a quest</Text>
      </Stack>

      <Group grow gap="xs">
        <Box bg="pink" h="12.5em" bdrs="3">
          BOSS
        </Box>

        <Stack gap="xs">
          <Box bg="pink" h="6em" bdrs="3">
            Wah
          </Box>

          <Box bg="pink" h="6em" bdrs="3">
            Fae
          </Box>
        </Stack>
      </Group>
    </Stack>
  );
}

export default Quests;
