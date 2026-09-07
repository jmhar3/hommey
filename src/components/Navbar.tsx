import dayjs from "dayjs";
import { Box, Divider, Flex, Text } from "@mantine/core";

import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

import type { Window } from "../screens";
import type { ActiveWindow } from "../App";

export interface NavbarProps {
  activeWindows: ActiveWindow[];
  setActiveWindow: (window: Window, isOpen: boolean) => void;
}

function Navbar(props: NavbarProps) {
  const { activeWindows, setActiveWindow } = props;

  return (
    <Flex
      p="sm"
      h="5vh"
      w="100vw"
      bg="cornflowerblue"
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap="sm">
        <NavMenu {...props} />

        <Divider orientation="vertical" bd="2px solid linen" />

        {activeWindows.map((window) => (
          <NavButton
            key={window.title}
            label={window.title}
            onClick={() => setActiveWindow(window, !window.isOpen)}
          />
        ))}
      </Flex>

      <Box bg="pink" px="xs" py="6px">
        <Text size="1.2em">{dayjs().format("h:mmA")}</Text>
      </Box>
    </Flex>
  );
}

export default Navbar;
