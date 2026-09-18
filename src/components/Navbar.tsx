import dayjs from "dayjs";
import { FaCog } from "react-icons/fa";
import { ActionIcon, Divider, Flex } from "@mantine/core";

import NavButton from "./NavButton";
import Dashboard from "../screens/Dashboard";
import Recipes from "../screens/Recipes";
import Weather from "../screens/Weather";
import ShoppingList from "../screens/ShoppingList";
import Roulette from "../screens/Roulette";
import Quests from "../screens/Quests";
import Clock from "../screens/Clock";
import Film from "../screens/Film";

import Theme from "../helpers/theme";

import type { WindowType } from "./Window";
import Settings from "../screens/Settings";

const windows = [
  { title: "Weather", screen: <Weather />, size: "full" },
  { title: "Groceries", screen: <ShoppingList />, size: "small" },
  { title: "Recipes", screen: <Recipes />, size: "full" },
  { title: "Quests", screen: <Quests />, size: "full" },
  { title: "Roulette", screen: <Roulette />, size: "full" },
  { title: "Film", screen: <Film />, size: "small" },
];

export interface NavbarProps {
  setFocusedWindow: (window: WindowType) => void;
}

function Navbar({ setFocusedWindow }: NavbarProps) {
  const { colours, contrastShadow, inset } = Theme();
  return (
    <Flex
      p="xs"
      h="8vh"
      w="100vw"
      align="center"
      bg={colours.mid}
      justify="space-between"
      {...inset}
    >
      <Flex align="center" gap="xs">
        <NavButton
          label="DASHBOARD"
          onClick={() =>
            setFocusedWindow({
              title: "Dashboard",
              screen: <Dashboard />,
              size: "full",
            })
          }
        />

        <Divider orientation="vertical" bd={`2px solid ${colours.blue}`} />

        {windows.map((window) => (
          <NavButton
            key={window.title}
            label={window.title.toUpperCase()}
            onClick={() => setFocusedWindow(window)}
          />
        ))}
      </Flex>

      <Flex align="center" gap="xs">
        <Divider orientation="vertical" bd={`2px solid ${colours.blue}`} />

        <NavButton
          label={dayjs().format("h:mmA")}
          onClick={() =>
            setFocusedWindow({
              title: "Clock",
              screen: <Clock />,
              size: "small",
            })
          }
        />

        <ActionIcon
          h="44px"
          size="xl"
          onClick={() =>
            setFocusedWindow({
              title: "Settings",
              screen: <Settings />,
              size: "small",
            })
          }
          {...contrastShadow}
        >
          <FaCog />
        </ActionIcon>
      </Flex>
    </Flex>
  );
}

export default Navbar;
