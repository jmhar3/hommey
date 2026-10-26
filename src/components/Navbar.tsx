import dayjs from "dayjs";
import { FaCog, FaDog, FaGamepad } from "react-icons/fa";
import { ActionIcon, Divider, Flex, Stack } from "@mantine/core";

import NavButton from "./NavButton";
import IconButton from "./IconButton";
import Settings from "../screens/Settings";
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
import Louis from "../screens/Louis";
import Games from "../screens/Games";

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
    <>
      <Stack pos="fixed" top={0} left={0} p="xs">
        <IconButton
          icon={<FaDog size="2.4em" />}
          value="LOUIS"
          onClick={() =>
            setFocusedWindow({
              title: "Louis",
              screen: <Louis />,
              size: "small",
            })
          }
        />

        <IconButton
          icon={<FaGamepad size="2.4em" />}
          value="GAMES"
          onClick={() =>
            setFocusedWindow({
              title: "Games",
              screen: <Games />,
              size: "small",
            })
          }
        />
      </Stack>

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
    </>
  );
}

export default Navbar;
