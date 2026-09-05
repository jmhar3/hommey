import { Box, Stack } from "@mantine/core";
import Navbar from "./components/Navbar";
import { useState } from "react";

import Window from "./components/Window";

import type { Window as WindowType } from "./screens";

export interface ActiveWindow extends WindowType {
  isOpen: boolean;
}

function App() {
  const [activeWindows, setActiveWindows] = useState<ActiveWindow[]>([]);

  const setActiveWindow = (window: WindowType, isOpen: boolean) => {
    setActiveWindows((existingWindows) => {
      const findExistingWindow = existingWindows.find(
        (activeWindow) => activeWindow.title === window.title,
      );

      if (findExistingWindow) {
        return existingWindows.map((existingWindow) => {
          if (existingWindow.title === window.title)
            return { ...existingWindow, isOpen };
          return existingWindow;
        });
      }

      return [...existingWindows, { ...window, isOpen }];
    });
  };

  return (
    <Stack w="100vw" h="100vh" bg="linen">
      <Box h="95vh">
        {activeWindows.map(
          (activeWindow) =>
            activeWindow.isOpen && (
              <Window window={activeWindow} setActiveWindow={setActiveWindow} />
            ),
        )}
      </Box>
      <Navbar activeWindows={activeWindows} setActiveWindow={setActiveWindow} />
    </Stack>
  );
}

export default App;
