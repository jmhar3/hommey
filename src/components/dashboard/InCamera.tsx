import { Box, Group, Stack, Title } from "@mantine/core";

import Container from "../Container";

function InCamera() {
  return (
    <Container>
      <Stack>
        <Title>In Camera</Title>

        <Group grow>
          <Box bg="pink" h="6em" w="6em" bdrs="3">
            Harmon Phoenix II in the Nikon F55
          </Box>
          <Box bg="pink" h="6em" w="6em" bdrs="3">
            Film in the Camera
          </Box>
        </Group>
      </Stack>
    </Container>
  );
}

export default InCamera;
