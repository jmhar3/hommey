import { useState } from "react";
import { BackgroundImage, Box, Stack } from "@mantine/core";

import Navbar from "./components/Navbar";
import Window, { type WindowType } from "./components/Window";

import { colours } from "./helpers/theme";

import airey from "../public/assets/airey.jpg";
import birdhouse from "../public/assets/birdhouse.jpg";
import birds from "../public/assets/birds.jpg";
import magpie from "../public/assets/magpie.jpg";
import oakland from "../public/assets/oakland.jpg";

const images = [airey, birdhouse, birds, magpie, oakland];

const randomImageNum = Math.floor(Math.random() * images.length);

function App() {
  const [focusedWindow, setFocusedWindow] = useState<WindowType>();

  return (
    <Stack w="100vw" h="100vh" bg={colours.light} gap="0">
      <BackgroundImage src={images[randomImageNum]}>
        <Box h="94vh" p="sm">
          {focusedWindow && (
            <Window
              window={focusedWindow}
              setFocusedWindow={setFocusedWindow}
            />
          )}
        </Box>
      </BackgroundImage>

      <Box h="5vh" bg="red">
        <Navbar setFocusedWindow={setFocusedWindow} />
      </Box>
    </Stack>
  );
}

export default App;
