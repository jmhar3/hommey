import { useMemo } from "react";
import { Flex, Text, Stack, Title, Divider, Button } from "@mantine/core";
import { FaCloudRain, FaSun, FaThermometerHalf, FaWind } from "react-icons/fa";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";

import Container from "../Container";

import { colours, contrastShadow } from "../../helpers/theme";

// import { useAppDispatch, useAppSelector } from "../../state/hooks";
// import { fetchWeather } from "../../state/weather/weatherThunks";

// import {
//   selectWeather,
//   selectWeatherStatus,
// } from "../../state/weather/weatherSlice";

dayjs.extend(advancedFormat);

function Greeting() {
  // const dispatch = useAppDispatch();

  // const weatherStatus = useAppSelector(selectWeatherStatus);
  // const weatherData = useAppSelector(selectWeather);

  // useEffect(() => {
  //   if (weatherStatus === "idle") {
  //     dispatch(fetchWeather());
  //   }
  // }, [dispatch, weatherStatus]);

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
      <Flex w="100%" align="center" gap="xs">
        <Stack gap="0" w="100%">
          <Text size="1em">{date.toUpperCase()}</Text>
          <Title size="2.4em">{greeting}</Title>
        </Stack>

        <Divider size="lg" color={colours.contrast} orientation="vertical" />

        <Flex w="fit-content" gap="xs">
          {/*INSERT CURRENT WEATHER: ICONS, TEMP, UV, CHANCE OF RAIN*/}
          <Button pb="0" pt="xs" px="xs" h="fit-content" {...contrastShadow}>
            <Stack gap="xs" align="center" justify="center">
              <FaThermometerHalf size="2.4em" />
              <Text size="1.5em">
                28°C
                {/*{weatherData?.hourly.apparent_temperature}°C*/}
              </Text>
            </Stack>
          </Button>

          <Button pb="0" pt="xs" px="xs" h="fit-content" {...contrastShadow}>
            <Stack gap="xs" align="center" justify="center">
              <FaWind size="2.4em" />
              <Text size="1.5em">28k</Text>
            </Stack>
          </Button>

          <Button pb="0" pt="xs" px="xs" h="fit-content" {...contrastShadow}>
            <Stack gap="xs" align="center" justify="center">
              <FaSun size="2.4em" />
              <Text size="1.5em">2UV</Text>
            </Stack>
          </Button>

          <Button pb="0" pt="xs" px="xs" h="fit-content" {...contrastShadow}>
            <Stack gap="xs" align="center" justify="center">
              <FaCloudRain size="2.4em" />
              <Text size="1.5em">2mm</Text>
            </Stack>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Greeting;
