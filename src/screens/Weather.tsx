import { Flex, Grid, Stack, Text, Title } from "@mantine/core";

import Container from "../components/Container";

import Theme from "../helpers/theme";

function Weather() {
  const { lightInset } = Theme();

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Grid>
        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>Temp + Feels Liks</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>Chance of Rain</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>UV w peak</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>Wind Gusts w peak</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>Humidity w Dew Point</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={6}>
              <Container>
                <Stack>
                  <Title>Sunrise + Sunset</Title>
                </Stack>
              </Container>
            </Grid.Col>

            <Grid.Col span={12}>
              <Container>
                <Stack>
                  <Title>Hourly Forecast</Title>

                  <Flex>
                    <Text>Temp / Feels Like</Text>
                    <Text>Chance of Rain</Text>
                  </Flex>
                </Stack>
              </Container>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={4}>
          <Container>
            <Stack h="69vh">
              <Title>This Weeks Forecast</Title>

              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <Flex key={day} h="100%" {...lightInset}>
                  <Text>{day}</Text>
                  <Text>High / Low</Text>
                  <Text>Weather Icon</Text>
                </Flex>
              ))}
            </Stack>
          </Container>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default Weather;
