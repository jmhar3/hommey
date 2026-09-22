import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  NumberInput,
  Stack,
} from "@mantine/core";

import Theme from "../helpers/theme";
import Timer from "../components/Timer";
import { FaClock } from "react-icons/fa";

interface TimerType {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

function Clock() {
  const { input, button, colours, contrastShadow } = Theme();
  const [showCustomForm, { toggle: toggleCustomForm }] = useDisclosure();

  const [timerInputs, setTimerInputs] = useState<TimerType>();

  const [timers, setTimers] = useState<
    { id: string; timerInSeconds: number }[]
  >([]);

  const addTimer = (timerInSeconds: number) =>
    setTimers([...timers, { id: uuid(), timerInSeconds: timerInSeconds }]);

  const addCustomTimer = () => {
    const hoursInSeconds = (timerInputs?.hours || 0) * 60 * 60;
    const minutesInSeconds = (timerInputs?.minutes || 0) * 60;

    setTimers([
      {
        id: uuid(),
        timerInSeconds:
          (timerInputs?.seconds || 0) + minutesInSeconds + hoursInSeconds,
      },
      ...timers,
    ]);

    setTimerInputs(undefined);
  };

  return (
    <Stack p="xs" h="100vh" gap="xs">
      <Group grow gap="xs">
        <Button {...button} onClick={() => addTimer(60)}>
          1 MINUTE
        </Button>

        <Button {...button} onClick={() => addTimer(180)}>
          3 MINUTE
        </Button>

        <Button {...button} onClick={() => addTimer(300)}>
          5 MINUTE
        </Button>

        <Button {...button} onClick={toggleCustomForm}>
          CUSTOM
        </Button>
      </Group>

      {showCustomForm && (
        <Flex gap="xs" p="xs" bd={`dotted 4px ${colours.blue}`}>
          <NumberInput
            min={0}
            radius={0}
            placeholder="HOURS"
            value={timerInputs?.hours}
            onChange={(value) =>
              setTimerInputs({ hours: Number(value), ...timerInputs })
            }
            {...input}
          />

          <NumberInput
            min={0}
            radius={0}
            placeholder="MINUTES"
            value={timerInputs?.minutes}
            onChange={(value) =>
              setTimerInputs({ ...timerInputs, minutes: Number(value) })
            }
            {...input}
          />

          <NumberInput
            min={0}
            radius={0}
            placeholder="SECONDS"
            value={timerInputs?.seconds}
            onChange={(value) =>
              setTimerInputs({ ...timerInputs, seconds: Number(value) })
            }
            {...input}
          />

          <ActionIcon size="xl" {...contrastShadow} onClick={addCustomTimer}>
            <FaClock />
          </ActionIcon>
        </Flex>
      )}

      {timers.map((timer) => (
        <Timer
          key={timer.id}
          timerInSeconds={timer.timerInSeconds}
          closeTimer={() => timers.filter(({ id }) => id !== timer.id)}
        />
      ))}
    </Stack>
  );
}

export default Clock;
