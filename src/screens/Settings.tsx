import { useState } from "react";
import { FaRedo } from "react-icons/fa";
import { ActionIcon, Flex, Stack, Switch, Text } from "@mantine/core";

import Container from "../components/Container";

import { contrastShadow, switchStyle } from "../helpers/theme";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);

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
            onChange={(event) => setDarkMode(event.currentTarget.checked)}
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
