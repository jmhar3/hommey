import { Box, Group, Stack } from "@mantine/core";

import Container from "../Container";

import { colours, shadow } from "../../helpers/theme";

function InCamera() {
  return (
    <Container>
      <Stack>
        <Group grow>
          <Box p="xs" h="8em" w="6em" bg={colours.light} {...shadow}>
            Harmon Phoenix II in the Nikon F55
          </Box>
          <Box p="xs" h="8em" w="6em" bg={colours.light} {...shadow}>
            Film in the Camera
          </Box>
        </Group>
      </Stack>
    </Container>
  );
}

export default InCamera;
