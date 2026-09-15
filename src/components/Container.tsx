import { Box } from "@mantine/core";

import { colours, lightInset } from "../helpers/theme";

import type { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return (
    <Box p="xs" w="100%" {...lightInset} bg={colours.white}>
      {children}
    </Box>
  );
}

export default Container;
