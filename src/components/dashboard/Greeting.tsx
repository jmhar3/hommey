import { useMemo } from "react";
import { FaCloud, FaSun, FaThermometerHalf } from "react-icons/fa";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";

import {
  ActionIcon,
  Divider,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Container from "../Container";
import { colours } from "../../helpers/theme";

dayjs.extend(advancedFormat);

function Greeting() {
  const date = dayjs().format("dddd, Do of MMMM");

  const greeting = useMemo(() => {
    const hour = dayjs().hour();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }, []);

  return (
    <Container>
      <Grid>
        <Grid.Col span={6}>
          <Flex>
            <Stack gap="0">
              <Text size="1em">{date.toUpperCase()}</Text>
              <Title size="2.4em">{greeting}</Title>
            </Stack>

            <Divider
              mx="xl"
              size="lg"
              color={colours.contrast}
              orientation="vertical"
            />
          </Flex>
        </Grid.Col>

        <Grid.Col span={6}>
          {/*INSERT CURRENT WEATHER: ICONS, TEMP, UV, CHANCE OF RAIN*/}
          <ActionIcon>
            <FaThermometerHalf />
          </ActionIcon>

          <ActionIcon>
            <FaSun />
          </ActionIcon>

          <ActionIcon>
            <FaCloud />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Greeting;
