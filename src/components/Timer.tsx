import { useEffect, useMemo, useState } from "react";
import { Button } from "@mantine/core";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

import Theme from "../helpers/theme";

interface TimerProps {
  timerInSeconds: number;
  closeTimer: () => void;
}

function Timer({ timerInSeconds, closeTimer }: TimerProps) {
  const { button, colours } = Theme();

  const [count, setCount] = useState(timerInSeconds);

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count]);

  const formattedTimer = useMemo(() => {
    const minutes = Math.floor(count / 60);
    const hours = Math.floor(count / 60 / 60);

    if (hours >= 1) {
      const minutesMinusHours = minutes - hours * 60;
      const secondsMinusMinutesAndHours =
        count - hours * 60 * 60 - minutesMinusHours * 60;
      return {
        hours: hours,
        minutes: minutesMinusHours,
        seconds: secondsMinusMinutesAndHours,
      };
    }

    if (minutes >= 1) {
      return { minutes: minutes, seconds: count - minutes * 60 };
    }

    return { seconds: count };
  }, [count]);

  return (
    <Button
      {...button}
      c={count <= 0 ? "crimson" : colours.dark}
      onClick={closeTimer}
    >
      {count <= 0
        ? "COUNTDOWN COMPLETE"
        : `${formattedTimer.hours || "00"}:${formattedTimer.minutes || "00"}:${formattedTimer.seconds || "00"}`}
    </Button>
  );
}

export default Timer;
