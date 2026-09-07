import dayjs from "dayjs";
import { useMemo } from "react";
import { Flex, Stack, Text } from "@mantine/core";

function Greeting() {
  const date = dayjs().format("dddd, D of MMMM");

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
    <Flex bg="lightpink" p="xs">
      <Stack gap="0">
        <Text size="1.2em">{date}</Text>
        <Text size="2em">{greeting}</Text>
      </Stack>
      <Text>*insert current weather: icon, temp, uv, chance of rain*</Text>
    </Flex>
  );
}

export default Greeting;
