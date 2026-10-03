import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Flex, Grid, Group, Stack, Text } from "@mantine/core";

import QuestList from "../components/quests/QuestList";
import Container from "../components/Container";
import QuestForm from "../components/quests/QuestForm";

import Theme from "../helpers/theme";

function BossBattle() {
  const { colours, button, lightInset } = Theme();

  const [showForm, { open: openForm, close: closeForm }] = useDisclosure();

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={8}>
          <Container>
            <Stack align="center" gap="xs">
              <Box h="12.5em" w="100%" {...lightInset}>
                BOSS
              </Box>

              <Text size="lg" w="100%" ta="center">
                VS
              </Text>

              <Flex gap="xs" w="100%">
                <Box h="6em" w="100%" {...lightInset}>
                  Wah
                </Box>

                <Box h="6em" w="100%" {...lightInset}>
                  Fae
                </Box>
              </Flex>

              <Flex p="xs" gap="xs" w="100%" {...lightInset}>
                <Container>
                  <Text size="1.8em">WHAT WILL YOU DO?</Text>
                </Container>

                <Stack miw="15em" p="xs" gap="xs" {...lightInset}>
                  <Group grow gap="xs">
                    <Button {...button}>FIGHT</Button>
                    <Button {...button}>HEAL</Button>
                  </Group>
                  <Group grow gap="xs">
                    <Button {...button}>BOOST</Button>
                    <Button {...button}>RUN</Button>
                  </Group>
                </Stack>
              </Flex>
            </Stack>
          </Container>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap="xs">
            {showForm ? (
              <Box p="xs" {...lightInset} bg={colours.white}>
                <QuestForm onComplete={closeForm} />
              </Box>
            ) : (
              <Button {...button} onClick={openForm}>
                INITIATE QUEST
              </Button>
            )}

            <QuestList />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default BossBattle;
