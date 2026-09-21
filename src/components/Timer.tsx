import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

import Container from "./Container";
import { ActionIcon, Text } from "@mantine/core";
import { FaTimes } from "react-icons/fa";
import Theme from "../helpers/theme";

interface TimerProps {
  timerInSeconds: number;
  closeTimer: () => void;
}

function Timer({ timerInSeconds, closeTimer }: TimerProps) {
  const { button } = Theme();

  const endTime = dayjs().add(timerInSeconds, "second");

  const timerInterval = setInterval(() => {
    const now = dayjs();
    const diff = endTime.diff(now); // Difference in milliseconds

    if (diff <= 0) {
      clearInterval(timerInterval);
      console.log("Timer finished!");
      return;
    }

    // Convert difference to a duration object
    const timeLeft = dayjs.duration(diff);

    // Format output (e.g., 09:59)
    return `${timeLeft.minutes()}:${timeLeft.seconds()}`;
  }, 1000);

  return (
    <Container>
      <ActionIcon onClick={closeTimer} {...button}>
        <FaTimes />
      </ActionIcon>
      <Text>{timerInterval}</Text>
    </Container>
  );
}

export default Timer;
