import { FaRedo } from "react-icons/fa";
import { ActionIcon, Flex, Stack, Switch, Text } from "@mantine/core";

import Container from "../components/Container";

import Theme from "../helpers/theme";

import { useAppDispatch, useAppSelector } from "../state/hooks";
import { toggleDarkMode, selectDarkMode } from "../state/darkModeSlice";

function Settings() {
  const { contrastShadow, switchStyle } = Theme();

  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Container>
        <Flex align="center" justify="space-between" gap="xs">
          <Text size="lg" w="100%">
            RELOAD APP:
          </Text>

          <ActionIcon
            h="44px"
            size="xl"
            onClick={() => window.location.reload()}
            {...contrastShadow}
          >
            <FaRedo />
          </ActionIcon>
        </Flex>
      </Container>

      <Container>
        <Flex align="center" justify="center" gap="xs">
          <Text size="lg" w="100%" ta="right">
            MEDIEVAL MODE
          </Text>

          <Switch
            checked={darkMode}
            {...switchStyle(darkMode)}
            onChange={() => dispatch(toggleDarkMode(!darkMode))}
          />

          <Text size="lg" w="100%">
            SPACE MODE
          </Text>
        </Flex>
      </Container>
    </Stack>
  );
}

export default Settings;
