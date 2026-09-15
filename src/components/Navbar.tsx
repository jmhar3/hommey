import dayjs from "dayjs";
import { Button, Divider, Flex } from "@mantine/core";

import Dashboard from "../screens/Dashboard";
import Recipes from "../screens/Recipes";

import { colours, contrastInset, inset } from "../helpers/theme";

import ShoppingList from "../screens/ShoppingList";
import Roulette from "../screens/Roulette";
import Quests from "../screens/Quests";
import Clock from "../screens/Clock";
import Film from "../screens/Film";

import type { WindowType } from "./Window";

const windows = [
  { title: "Film", screen: <Film />, size: "full" },
  { title: "Recipes", screen: <Recipes />, size: "full" },
  { title: "Battle", screen: <Quests />, size: "full" },
  { title: "MeatCute Roulette", screen: <Roulette />, size: "full" },
  { title: "Shopping List", screen: <ShoppingList />, size: "small" },
];

export interface NavbarProps {
  setFocusedWindow: (window: WindowType) => void;
}

function Navbar({ setFocusedWindow }: NavbarProps) {
  return (
    <Flex
      px="xs"
      h="6vh"
      w="100vw"
      align="center"
      bg={colours.mid}
      justify="space-between"
      {...inset}
    >
      <Flex align="center" gap="sm">
        <Button
          onClick={() =>
            setFocusedWindow({
              title: "Dashboard",
              screen: <Dashboard />,
              size: "full",
            })
          }
          {...contrastInset}
        >
          DASHBOARD
        </Button>

        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

        {windows.map((window) => (
          <Button
            key={window.title}
            onClick={() => setFocusedWindow(window)}
            {...contrastInset}
          >
            {window.title.toUpperCase()}
          </Button>
        ))}
      </Flex>

      <Flex align="center" gap="sm">
        <Divider orientation="vertical" bd={`2px solid ${colours.contrast}`} />

        <Button
          px="xs"
          onClick={() =>
            setFocusedWindow({
              title: "Clock",
              screen: <Clock />,
              size: "small",
            })
          }
          {...contrastInset}
        >
          {dayjs().format("h:mmA")}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
