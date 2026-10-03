import { Box, Flex, Grid, Stack, Text } from "@mantine/core";

import Theme from "../helpers/theme";
import QuestList from "../components/quests/QuestList";
import Container from "../components/Container";

function BossBattle() {
  const { lightInset } = Theme();

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={8}>
          <Container>
            <Stack align="center">
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
            </Stack>
          </Container>
        </Grid.Col>

        <Grid.Col span={4}>
          <Container>
            <QuestList />
          </Container>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default BossBattle;
