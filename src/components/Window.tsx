import { Box, Button, Flex, Stack, Title } from "@mantine/core";

import type { Window as WindowType } from "../screens";

interface WindowProps {
  window: WindowType;
  setActiveWindow: (window: WindowType, isOpen: boolean) => void;
}
function Window(props: WindowProps) {
  const minimiseWindow = () => {};

  const maximiseWindow = () => {};

  const closeWindow = () => {};

  return (
    <Stack bg="brown" p="xs" bdrs="3" h="100%" gap="xs">
      <Flex w="100%" align="center" justify="space-between">
        <Title c="linen">{props.window.title}</Title>

        <Flex gap="xs">
          <Button
            p="0"
            h="3.3em"
            w="3.3em"
            c="brown"
            color="linen"
            onClick={minimiseWindow}
          >
            -
          </Button>

          <Button
            p="0"
            h="3.3em"
            w="3.3em"
            c="brown"
            color="linen"
            onClick={maximiseWindow}
          >
            +
          </Button>

          <Button
            p="0"
            h="3.3em"
            w="3.3em"
            c="brown"
            color="linen"
            onClick={closeWindow}
          >
            x
          </Button>
        </Flex>
      </Flex>

      <Box h="100%" bg="white" bdrs="3">
        {props.window.screen}
      </Box>
    </Stack>
  );
}

export default Window;
