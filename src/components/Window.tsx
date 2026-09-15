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
    <Stack
      p="xs"
      gap="xs"
      bg={colours.mid}
      mah={props.window.size === "full" ? "100%" : "fit-content"}
      // w={props.window.size === "full" ? "100vw" : undefined}
      maw={props.window.size === "full" ? "100vw" : "60vw"}
      miw={props.window.size === "full" ? undefined : "40vw"}
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

      <ScrollArea
        bg={colours.light}
        h={props.window.size === "full" ? "90vh" : "45vh"}
        {...inset}
      >
        {props.window.screen}
      </ScrollArea>
    </Stack>
  );
}

export default Window;
