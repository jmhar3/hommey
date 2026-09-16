import { ActionIcon, Flex, ScrollArea, Stack, Title } from "@mantine/core";
import { FaTimes, FaWindowMinimize } from "react-icons/fa";

import { colours, inset, contrastShadow, shadow } from "../helpers/theme";

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
    <Stack
      p="xs"
      gap="xs"
      bg={colours.mid}
      mah={props.window.size === "full" ? "100%" : "fit-content"}
      maw={props.window.size === "full" ? "100vw" : "60vw"}
      miw={props.window.size === "full" ? undefined : "45vw"}
      {...shadow}
    >
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
            size="xl"
            {...contrastShadow}
            onClick={() => props.setFocusedWindow()}
          >
            <FaWindowMinimize />
          </ActionIcon>

          <ActionIcon
            size="xl"
            {...contrastShadow}
            onClick={() => props.setFocusedWindow()}
          >
            <FaTimes />
          </ActionIcon>
        </Flex>
      </Flex>

      <ScrollArea
        bg={colours.light}
        h={props.window.size === "full" ? "90vh" : "60vh"}
        {...inset}
      >
        {props.window.screen}
      </ScrollArea>
    </Stack>
  );
}

export default Window;
