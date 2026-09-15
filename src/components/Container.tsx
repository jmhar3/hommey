import { Box } from "@mantine/core";

import { lightInset } from "../helpers/theme";

import type { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return (
    <Box p="xs" w="100%" {...lightInset}>
      {children}
    </Box>
  );
}

export default Container;
