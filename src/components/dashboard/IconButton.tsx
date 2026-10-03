import { Button, Stack, Text } from "@mantine/core";

import Theme from "../../helpers/theme";

import type { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  value: string;
}

function IconButton({ icon, value }: IconButtonProps) {
  const { colours } = Theme();

  return (
    <Button
      pb="0"
      pt="xs"
      px="xs"
      bdrs={0}
      bg="none"
      h="fit-content"
      c={colours.dark}
      bd={`dotted 4px ${colours.blue}`}
    >
      <Stack gap="xs" align="center" justify="center">
        {icon}

        <Text size="1.5em">{value}</Text>
      </Stack>
    </Button>
  );
}

export default IconButton;
