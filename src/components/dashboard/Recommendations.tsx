import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";

import Container from "../Container";

import { colours, contrastInset, shadow } from "../../helpers/theme";

function Recommendations() {
  return (
    <Container>
      <Stack>
        <Title>Feeling Breezy</Title>

        <Text>It's cold, wet and windy. Perfect day to stay at home.</Text>

        <Group grow>
          <Box p="xs" h="6em" bg={colours.light} {...shadow} />
          <Box p="xs" h="6em" bg={colours.light} {...shadow} />
          <Box p="xs" h="6em" bg={colours.light} {...shadow} />
        </Group>

        <Group grow>
          <Button {...contrastInset}>Play Adventure Roulette</Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default Recommendations;
