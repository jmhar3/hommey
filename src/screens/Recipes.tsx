import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { FaPlus } from "react-icons/fa";

import {
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

import type { Recipe as RecipeType } from "../state/types";

function Recipes() {
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

  if (!focusedRecipe && recipes.length > 0) setFocusedRecipe(recipes[0]);

  if (recipes.length > 0)
    return (
      <Grid p="xs" h="100%">
        <Grid.Col span={3}>
          <Flex h="100%" gap="xs">
            <Stack w="100%">
              <Button color="brown" onClick={open} leftSection={<FaPlus />}>
                Add New Recipe
              </Button>
              <RecipesList
                recipes={recipes}
                focusedRecipe={focusedRecipe}
                onRecipeClick={(recipe: RecipeType) => setFocusedRecipe(recipe)}
              />
            </Stack>

            <Divider orientation="vertical" bd="2px solid brown" />
          </Flex>
        </Grid.Col>

        <Grid.Col span={9}>
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
    <Center h="100%">
      <Stack gap="md" align="center">
        <Loader color="brown" />
        <Title>Fetching Recipes...</Title>
      </Stack>
    </Center>
  );
}

export default Recipes;
