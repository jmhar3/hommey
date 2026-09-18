import dayjs from "dayjs";
import { useMemo, useState } from "react";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Flex, Text, Stack, Title, ActionIcon, Group } from "@mantine/core";

import {
  FaSun,
  FaWind,
  FaBrain,
  FaHeart,
  FaCloudRain,
  FaThermometerHalf,
  FaHandHoldingHeart,
} from "react-icons/fa";

import Container from "../Container";
import GreetingButton from "./GreetingButton";

import Theme from "../../helpers/theme";

// import { useAppDispatch, useAppSelector } from "../../state/hooks";
// import { fetchWeather } from "../../state/weather/weatherThunks";

// import {
//   selectWeather,
//   selectWeatherStatus,
// } from "../../state/weather/weatherSlice";

dayjs.extend(advancedFormat);

function Greeting() {
  const { contrastShadow } = Theme();

  // const dispatch = useAppDispatch();

  // const weatherStatus = useAppSelector(selectWeatherStatus);
  // const weatherData = useAppSelector(selectWeather);

  // useEffect(() => {
  //   if (weatherStatus === "idle") {
  //     dispatch(fetchWeather());
  //   }
  // }, [dispatch, weatherStatus]);

  const [selection, setSelection] = useState<"chill" | "brain" | "body">();

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
      <Stack gap="xs">
        <Flex w="100%" align="center" gap="xs">
          <Stack gap="0" w="100%">
            <Text size="1em">{date.toUpperCase()}</Text>
            <Title size="2.4em">{greeting}</Title>
            <Text pt="xs">HOW ARE YOU FEELING?</Text>
          </Stack>

          <Flex w="fit-content" gap="xs">
            {/*{weatherData?.hourly.apparent_temperature}°C*/}
            <GreetingButton
              icon={<FaThermometerHalf size="2.4em" />}
              value="28°C"
            />

            <GreetingButton icon={<FaWind size="2.4em" />} value="24k" />

            <GreetingButton icon={<FaSun size="2.4em" />} value="2UV" />

            <GreetingButton icon={<FaCloudRain size="2.4em" />} value="2mm" />

            {/*<Button pb="0" pt="xs" px="xs" h="fit-content" {...contrastShadow}>
              <Stack gap="xs" align="center" justify="center">
                <FaCloudRain size="2.4em" />
                <Text size="1.5em">2mm</Text>
              </Stack>
            </Button>*/}
          </Flex>
        </Flex>

        <Stack gap="xs">
          {selection ? (
            <>
              {selection === "chill" && <Text>Chill</Text>}
              {selection === "brain" && <Text>Brain</Text>}
              {selection === "body" && <Text>Body</Text>}
            </>
          ) : (
            <Group grow>
              <ActionIcon
                p="xs"
                h="6em"
                onClick={() => setSelection("chill")}
                {...contrastShadow}
              >
                <FaHandHoldingHeart size="lg" />
              </ActionIcon>

              <ActionIcon
                p="xs"
                h="6em"
                onClick={() => setSelection("brain")}
                {...contrastShadow}
              >
                <FaBrain size="lg" />
              </ActionIcon>

              <ActionIcon
                p="xs"
                h="6em"
                onClick={() => setSelection("body")}
                {...contrastShadow}
              >
                <FaHeart size="lg" />
              </ActionIcon>
            </Group>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Greeting;
