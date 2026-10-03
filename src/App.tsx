import { useEffect, useState } from "react";
import { BackgroundImage, Box, Button, Center, Stack } from "@mantine/core";

import Navbar from "./components/Navbar";
import Window, { type WindowType } from "./components/Window";

import Theme from "./helpers/theme";

import airey from "../public/assets/airey.jpg";
import birdhouse from "../public/assets/birdhouse.jpg";
import birds from "../public/assets/birds.jpg";
import magpie from "../public/assets/magpie.jpg";
import oakland from "../public/assets/oakland.jpg";
import clickSound from "../public/assets/click2.wav";

import { useAppDispatch, useAppSelector } from "./state/hooks";
import { selectGroceryItemsStatus } from "./state/groceryItems/groceryItemsSlice";
import { fetchShoppingList } from "./state/shoppingList/shoppingListThunks";
import { fetchGroceryItems } from "./state/groceryItems/groceryItemsThunks";
import { selectHydrangeaStatus } from "./state/hydrangea/hydrangeaSlice";
import { fetchHydrangea } from "./state/hydrangea/hydrangeaThunks";
import { selectQuestsStatus } from "./state/quests/questsSlice";
import { fetchQuests } from "./state/quests/questsThunks";
import { selectRecipesStatus } from "./state/recipes/recipesSlice";
import { fetchRecipes } from "./state/recipes/recipesThunks";
import { selectShopsStatus } from "./state/shops/shopsSlice";
import { selectShoppingListStatus } from "./state/shoppingList/shoppingListSlice";
import { fetchShops } from "./state/shops/shopsThunks";

const images = [airey, birdhouse, birds, magpie, oakland];

const randomImageNum = Math.floor(Math.random() * images.length);

function App() {
  const { colours } = Theme();

  const dispatch = useAppDispatch();
  const shoppingListStatus = useAppSelector(selectShoppingListStatus);
  const groceryItemsStatus = useAppSelector(selectGroceryItemsStatus);
  const hydrangeaStatus = useAppSelector(selectHydrangeaStatus);
  const questsStatus = useAppSelector(selectQuestsStatus);
  const recipesStatus = useAppSelector(selectRecipesStatus);
  const shopsStatus = useAppSelector(selectShopsStatus);

  useEffect(() => {
    if (shoppingListStatus === "idle") {
      dispatch(fetchShoppingList());
    }
    if (groceryItemsStatus === "idle") {
      dispatch(fetchGroceryItems());
    }
    if (hydrangeaStatus === "idle") {
      dispatch(fetchHydrangea());
    }
    if (questsStatus === "idle") {
      dispatch(fetchQuests());
    }
    if (recipesStatus === "idle") {
      dispatch(fetchRecipes());
    }
    if (shopsStatus === "idle") {
      dispatch(fetchShops());
    }
  }, [
    dispatch,
    shoppingListStatus,
    groceryItemsStatus,
    hydrangeaStatus,
    questsStatus,
    recipesStatus,
    shopsStatus,
  ]);

  const [focusedWindow, setFocusedWindow] = useState<WindowType>();

  useEffect(() => {
    const audio = new Audio(clickSound);

    const handleGlobalClick = () => {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.warn(
          "Audio playback failed or was blocked by the browser:",
          error,
        );
      });
    };

    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <Stack w="100vw" h="100vh" bg={colours.light} gap="0">
      <BackgroundImage src={images[randomImageNum]}>
        <Center h="92vh" p="xs">
          {focusedWindow && (
            <Window
              window={focusedWindow}
              setFocusedWindow={setFocusedWindow}
            />
          )}
        </Center>
      </BackgroundImage>

      <Navbar setFocusedWindow={setFocusedWindow} />
    </Stack>
  );
}

export default App;
