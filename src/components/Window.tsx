import { ActionIcon, Flex, ScrollArea, Stack, Title } from "@mantine/core";
import { FaTimes, FaWindowMinimize } from "react-icons/fa";

import { colours, inset, shadow } from "../helpers/theme";

import type { ReactElement } from "react";

export interface WindowType {
  title: string;
  screen: ReactElement;
  size: string;
}

interface WindowProps {
  window: WindowType;
  setFocusedWindow: (window?: WindowType) => void;
}

function Window(props: WindowProps) {
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
            onClick={() => props.setFocusedWindow()}
          >
            <FaWindowMinimize />
          </ActionIcon>

          <ActionIcon
            bdrs="0"
            color="dark"
            size="xl"
            bd="solid 4px"
            variant="outline"
            onClick={() => props.setFocusedWindow()}
          >
            <FaTimes />
          </ActionIcon>
        </Flex>
      </Flex>

      <ScrollArea h="90vh" bg={colours.light} {...inset}>
        {props.window.screen}
      </ScrollArea>
    </Stack>
  );
}

export default Window;
