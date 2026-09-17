import { Flex, Grid, Group, Stack, Text, Title } from "@mantine/core";
import Container from "../components/Container";

function Weather() {
  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={8}>
          <Stack>
            <Container>
              <Stack>
                <Title>Todays Forecast (hourly)</Title>
                <Flex>
                  <Text>Temp / Feels Like</Text>
                  <Text>Chance of Rain</Text>
                  <Text>UV</Text>
                  <Text>Gust Speeds km/h</Text>
                </Flex>
              </Stack>
            </Container>

            <Group grow align="flex-start">
              <Container>
                <Stack>
                  <Title>Sunrise + Sunset</Title>
                </Stack>
              </Container>

              <Container>
                <Stack>
                  <Title>Humidity / Calculate chance of fog</Title>
                </Stack>
              </Container>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={4}>
          <Container>
            <Stack>
              <Title>This Weeks Forecast (daily)</Title>
              <Flex>
                <Text>Monday, 31st August 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Tuesday, 1st September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Wednesday, 2nd September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Thursday, 3rd September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Friday, 4th September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Saturday, 5th September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
              <Flex>
                <Text>Sunday, 6th September 2026</Text>
                <Text>High / Low</Text>
                <Text>Chance of Rain</Text>
              </Flex>
            </Stack>
          </Container>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default Weather;
