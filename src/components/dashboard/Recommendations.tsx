import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";

function Recommendations() {
  return (
    <Stack p="xs" bdrs="3" bd="solid 2px brown">
      <Title>Feeling Breezy</Title>

      <Text>It's cold, wet and windy. Perfect day to stay at home.</Text>

      <Group grow>
        <Box bg="pink" h="6em" w="6em" bdrs="3" />
        <Box bg="pink" h="6em" w="6em" bdrs="3" />
        <Box bg="pink" h="6em" w="6em" bdrs="3" />
      </Group>

      <Group grow>
        <Button color="pink">Play Adventure Roulette</Button>
      </Group>
    </Stack>
  );
}

export default Recommendations;
