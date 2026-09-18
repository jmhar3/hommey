import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { FaFilter, FaPlus } from "react-icons/fa";

import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Loader,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";

import Recipe from "../components/recipes/Recipe";
import RecipeForm from "../components/recipes/RecipeForm";
import RecipesList from "../components/recipes/RecipesList";

import { fetchRecipes } from "../state/recipes/recipesThunks";
import { useAppDispatch, useAppSelector } from "../state/hooks";

import {
  selectRecipes,
  selectRecipesStatus,
} from "../state/recipes/recipesSlice";

import Theme from "../helpers/theme";

import type { Recipe as RecipeType } from "../state/types";

function Recipes() {
  const { button, colours, contrastShadow } = Theme();

  const dispatch = useAppDispatch();

  const recipesStatus = useAppSelector(selectRecipesStatus);
  const recipes = useAppSelector(selectRecipes);

  useEffect(() => {
    if (recipesStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipesStatus]);

  const [showForm, { open, close }] = useDisclosure();

  const [focusedRecipe, setFocusedRecipe] = useState(recipes[0]);

  const onFocusRecipeClick = (recipe: RecipeType) => {
    close();
    setFocusedRecipe(recipe);
  };

  const onFilterClick = () => {};

  if (!focusedRecipe && recipes.length > 0) setFocusedRecipe(recipes[0]);

  if (recipes.length > 0)
    return (
      <Grid p="xs" h="100%">
        <Grid.Col span={4}>
          <Flex h="100%" gap="xs">
            <Stack w="100%">
              <Flex w="100%" gap="xs">
                <Button
                  w="100%"
                  onClick={open}
                  leftSection={<FaPlus />}
                  {...button}
                >
                  NEW RECIPE
                </Button>

                <ActionIcon
                  size="xl"
                  {...contrastShadow}
                  onClick={onFilterClick}
                >
                  <FaFilter />
                </ActionIcon>
              </Flex>

              <RecipesList
                recipes={recipes}
                focusedRecipe={focusedRecipe}
                onRecipeClick={onFocusRecipeClick}
              />
            </Stack>

            <Divider size="lg" orientation="vertical" color={colours.blue} />
          </Flex>
        </Grid.Col>

        <Grid.Col span={8}>
          <ScrollArea h="100%" type="always" offsetScrollbars>
            {showForm ? (
              <RecipeForm onClose={close} />
            ) : (
              <Recipe {...focusedRecipe} />
            )}
          </ScrollArea>
        </Grid.Col>
      </Grid>
    );

  return (
    <Center h="80vh">
      <Stack gap="md" align="center">
        <Loader color="brown" />
        <Title>Fetching Recipes...</Title>
      </Stack>
    </Center>
  );
}

export default Recipes;
