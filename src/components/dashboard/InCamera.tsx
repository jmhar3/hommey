import { Box, Group, Stack } from "@mantine/core";

import Container from "../Container";

import Theme from "../../helpers/theme";

function InCamera() {
  const { contrastShadow } = Theme();

  return (
    <Container>
      <Stack>
        <Group grow>
          <Box p="xs" h="8em" w="6em" {...contrastShadow}>
            Harmon Phoenix II in the Nikon F55
          </Box>
          <Box p="xs" h="8em" w="6em" {...contrastShadow}>
            Film in the Camera
          </Box>
        </Group>
      </Stack>
    </Container>
  );
}

export default InCamera;
