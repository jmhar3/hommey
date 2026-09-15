import { ActionIcon, Box, Flex, Stack, Title } from "@mantine/core";
import { FaCross, FaExpand, FaWindowMinimize } from "react-icons/fa";

import { colours, inset, shadow } from "../helpers/theme";

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
    <Stack p="xs" h="100%" gap="xs" bg={colours.mid} {...shadow}>
      <Flex
        p="xs"
        w="100%"
        align="center"
        justify="space-between"
        bg={colours.light}
        {...inset}
      >
        <Title c={colours.dark}>{props.window.title}</Title>

        <Flex gap="xs">
          <ActionIcon
            bdrs="0"
            color="dark"
            size="xl"
            bd="solid 4px"
            variant="outline"
            onClick={minimiseWindow}
          >
            <FaWindowMinimize />
          </ActionIcon>

          <ActionIcon
            bdrs="0"
            color="dark"
            size="xl"
            bd="solid 4px"
            variant="outline"
            onClick={maximiseWindow}
          >
            <FaExpand />
          </ActionIcon>

          <ActionIcon
            bdrs="0"
            color="dark"
            size="xl"
            bd="solid 4px"
            variant="outline"
            onClick={closeWindow}
          >
            <FaCross />
          </ActionIcon>
        </Flex>
      </Flex>

      <Box h="100%" bg={colours.light} {...inset}>
        {props.window.screen}
      </Box>
    </Stack>
  );
}

export default Window;
