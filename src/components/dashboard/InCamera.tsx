import { Box, Group, Stack, Title } from "@mantine/core";

function InCamera() {
  return (
    <Stack p="xs" bdrs="3" bd="solid 2px brown">
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
  );
}

export default InCamera;
