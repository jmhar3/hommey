import { Button, Stack, Text } from "@mantine/core";

import Theme from "../helpers/theme";

import type { ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: ReactNode;
  value: string;
}

function IconButton({ icon, value, onClick }: IconButtonProps) {
  const { colours } = Theme();

  return (
    <Button
      p="xs"
      bdrs={0}
      bg="none"
      h="fit-content"
      c={colours.dark}
      onClick={onClick}
      bd={`dotted 4px ${colours.blue}`}
    >
      <Stack gap="xs" align="center" justify="center">
        {icon}

        <Text size="1em">{value}</Text>
      </Stack>
    </Button>
  );
}

export default IconButton;
