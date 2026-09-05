import { Divider, Flex } from "@mantine/core";

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
    <Flex p="sm" h="5vh" gap="sm" w="100vw" bg="cornflowerblue" align="center">
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
  );
}

export default Navbar;
