import { ActionIcon, Flex, ScrollArea, Stack, Title } from "@mantine/core";
import { FaTimes, FaWindowMinimize } from "react-icons/fa";

import Theme from "../helpers/theme";

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
  const { colours, inset, contrastShadow } = Theme();

  return (
    <Stack
      p="xs"
      gap="xs"
      bg={colours.mid}
      bd={`solid 4px ${colours.dark}`}
      w={props.window.size === "full" ? "100vw" : undefined}
      maw={props.window.size === "full" ? undefined : "60vw"}
      miw={props.window.size === "full" ? undefined : "45vw"}
      mah={props.window.size === "full" ? "100%" : "fit-content"}
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
