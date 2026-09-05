import { Divider, Flex } from "@mantine/core";

import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

import type { Window } from "../screens";

export interface NavbarProps {
  activeWindows: Window[];
  setActiveWindow: (window: Window, isOpen: boolean) => void;
}

function Navbar(props: NavbarProps) {
  const { activeWindows, setActiveWindow } = props;

  const findActiveWindow = (title: string) =>
    activeWindows.find((window) => window.title === title);

  return (
    <Flex w="100%" h="fit-content" pos="fixed" bottom={0} left={0}>
      <NavMenu {...props} />

      <Divider orientation="vertical" />

      {activeWindows.map((window) => (
        <NavButton
          key={window.title}
          label={window.title}
          onClick={() =>
            setActiveWindow(window, !findActiveWindow(window.title))
          }
        />
      ))}
    </Flex>
  );
}

export default Navbar;
