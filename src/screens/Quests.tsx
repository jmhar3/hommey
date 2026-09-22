import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Theme from "../helpers/theme";

function BossBattle() {
  const { button, lightInset } = Theme();

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={6}>
          <Stack p="xs" {...lightInset}>
            <Title>Daily Challenges</Title>

            <Flex gap="xs">
              <Button {...button}>BRUSH</Button>
              <Button {...button}>WALK</Button>
              <Button {...button}>ROBOVAC</Button>
            </Flex>

            <Flex gap="xs">
              <Button {...button}>RELOAD DISHWASHER</Button>
              <Button {...button}>WIPE BENCH</Button>
            </Flex>
          </Stack>
        </Grid.Col>

        <Grid.Col span={6}>
          <Text>ATTACK</Text>
        </Grid.Col>

        <Grid.Col span={4}>
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
          <Text>Activity</Text>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default BossBattle;
