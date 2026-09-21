import { Box } from "@mantine/core";

import Theme from "../helpers/theme";

import type { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  style?: object;
}

function Container({ style, children }: ContainerProps) {
  const { colours, lightInset } = Theme();

  return (
    <Box p="xs" w="100%" {...lightInset} bg={colours.white} style={style}>
      {children}
    </Box>
  );
}

export default Container;
