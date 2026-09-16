import dayjs from "dayjs";
import { Divider, Flex } from "@mantine/core";

import Dashboard from "../screens/Dashboard";
import Recipes from "../screens/Recipes";
import NavButton from "./NavButton";

import ShoppingList from "../screens/ShoppingList";
import Roulette from "../screens/Roulette";
import Quests from "../screens/Quests";
import Clock from "../screens/Clock";
import Film from "../screens/Film";

import { colours, inset } from "../helpers/theme";

import type { WindowType } from "./Window";

const windows = [
  { title: "Film", screen: <Film />, size: "full" },
  { title: "Recipes", screen: <Recipes />, size: "full" },
  { title: "Battle", screen: <Quests />, size: "full" },
  { title: "Roulette", screen: <Roulette />, size: "full" },
  { title: "Grocery  List", screen: <ShoppingList />, size: "small" },
];

export interface NavbarProps {
  setFocusedWindow: (window: WindowType) => void;
}

function Navbar({ setFocusedWindow }: NavbarProps) {
  return (
    <Flex
      px="xs"
      h="8vh"
      w="100vw"
      align="center"
      bg={colours.mid}
      justify="space-between"
      {...inset}
    >
      <Flex align="center" gap="sm">
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

        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

        {windows.map((window) => (
          <NavButton
            key={window.title}
            label={window.title.toUpperCase()}
            onClick={() => setFocusedWindow(window)}
          />
        ))}
      </Flex>

      <Flex align="center" gap="sm">
        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

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
      </Flex>
    </Flex>
  );
}

export default Navbar;
