import { Button, Stack, Text } from "@mantine/core";

import Theme from "../../helpers/theme";

import type { ReactNode } from "react";

interface GreetingButtonProps {
  icon: ReactNode;
  value: string;
}

function GreetingButton({ icon, value }: GreetingButtonProps) {
  const { colours } = Theme();

  return (
    <Button
      pb="0"
      pt="xs"
      px="xs"
      bdrs={0}
      h="fit-content"
      c={colours.dark}
      bg={colours.light}
      bd={`dotted 4px ${colours.blue}`}
    >
      <Stack gap="xs" align="center" justify="center">
        {icon}

        <Text size="1.5em">{value}</Text>
      </Stack>
    </Button>
  );
}

export default GreetingButton;
