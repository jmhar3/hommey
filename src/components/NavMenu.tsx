import { Menu, Stack } from "@mantine/core";

import NavButton from "./NavButton";
import { menu } from "../screens";

import type { NavbarProps } from "./Navbar";

function NavMenu({ setActiveWindow }: NavbarProps) {
  return (
    <Menu>
      <Menu.Target>
        <NavButton label="Menu" onClick={() => console.log("CLICK")} />
      </Menu.Target>

      <Menu.Dropdown>
        {menu.map(({ label, windows }, index) => (
          <Stack key={label}>
            {index !== 0 && <Menu.Divider />}

            <Menu.Label>{label}</Menu.Label>

            {windows.map((window) => (
              <Menu.Item
                key={window.title}
                onClick={() => setActiveWindow(window, true)}
              >
                {window.title}
              </Menu.Item>
            ))}
          </Stack>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavMenu;
