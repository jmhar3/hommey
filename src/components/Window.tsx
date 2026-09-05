import { Box, Flex, Stack, Title } from "@mantine/core";

import type { Window as WindowType } from "../screens";
import NavButton from "./NavButton";

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
      <Flex p="xs" bg="gold" w="100%" align="center" justify="space-between">
        <Title>{props.window.title}</Title>

        <Flex gap="xs">
          <NavButton label="-" onClick={minimiseWindow} />
          <NavButton label="+" onClick={maximiseWindow} />
          <NavButton label="x" onClick={closeWindow} />
        </Flex>
      </Flex>

      <Box h="100%" bg="white">
        {props.window.screen}
      </Box>
    </Stack>
  );
}

export default Window;
