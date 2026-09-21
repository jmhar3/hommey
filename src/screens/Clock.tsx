import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Flex, Group, NumberInput, Stack } from "@mantine/core";

import Theme from "../helpers/theme";
import Timer from "../components/Timer";

function Clock() {
  const { input, button, lightInset } = Theme();
  const [showCustomForm, { toggle: toggleCustomForm }] = useDisclosure();

  const [timerInputs, setTimerInputs] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timers, setTimers] = useState<
    { id: string; timerInSeconds: number }[]
  >([]);

  const addTimer = (timerInSeconds: number) =>
    setTimers([...timers, { id: uuid(), timerInSeconds: timerInSeconds }]);

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
        <Flex gap="xs" p="xs" {...lightInset}>
          <NumberInput
            min={0}
            size="lg"
            radius={0}
            placeholder="HOURS"
            value={timerInputs.hours}
            onChange={(value) =>
              setTimerInputs({ ...timerInputs, hours: Number(value) })
            }
            {...input}
          />

          <NumberInput
            min={0}
            size="lg"
            radius={0}
            placeholder="MINUTES"
            value={timerInputs.minutes}
            onChange={(value) =>
              setTimerInputs({ ...timerInputs, minutes: Number(value) })
            }
            {...input}
          />

          <NumberInput
            min={0}
            size="lg"
            radius={0}
            placeholder="SECONDS"
            value={timerInputs.seconds}
            onChange={(value) =>
              setTimerInputs({ ...timerInputs, seconds: Number(value) })
            }
            {...input}
          />
        </Flex>
      )}

      {timers.map((timer) => (
        <Timer
          key={timer.id}
          timerInSeconds={timer.timerInSeconds}
          closeTimer={() => timers.filter(({ id }) => id === timer.id)}
        />
      ))}
    </Stack>
  );
}

export default Clock;
