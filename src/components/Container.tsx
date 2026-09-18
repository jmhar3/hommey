import { Box } from "@mantine/core";

import Theme from "../helpers/theme";

import type { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  const { colours, lightInset } = Theme();

  return (
    <Box p="xs" w="100%" {...lightInset} bg={colours.white}>
      {children}
    </Box>
  );
}

export default Container;
