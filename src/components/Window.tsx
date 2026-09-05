import { Box, Flex, Stack, Title } from "@mantine/core";

import type { Window as WindowType } from "../screens";

interface WindowProps {
  window: WindowType;
  setActiveWindow: (window: WindowType, isOpen: boolean) => void;
}
function Window(props: WindowProps) {
  return (
    <Stack>
      <Flex>
        <Title>{props.window.title}</Title>
      </Flex>

      <Box>{props.window.screen}</Box>
    </Stack>
  );
}

export default Window;
