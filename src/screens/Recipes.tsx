import { useEffect, useState } from "react";
import { Center, Grid, Loader, ScrollArea, Stack, Title } from "@mantine/core";

import RecipesList from "../components/recipes/RecipesList";
import Recipe from "../components/recipes/Recipe";

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

  const [focusedRecipe, setFocusedRecipe] = useState(recipes[0]);

  if (!focusedRecipe && recipes.length > 0) setFocusedRecipe(recipes[0]);

  if (recipes.length > 0)
    return (
      <Grid p="xs" h="100%">
        <Grid.Col span={3}>
          <RecipesList
            recipes={recipes}
            focusedRecipe={focusedRecipe}
            onRecipeClick={(recipe: RecipeType) => setFocusedRecipe(recipe)}
          />
        </Grid.Col>

        <Grid.Col span={9}>
          <ScrollArea h="100%" type="always" offsetScrollbars>
            <Recipe {...focusedRecipe} />
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
