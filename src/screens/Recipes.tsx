import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { FaFilter, FaPlus, FaTimes } from "react-icons/fa";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Loader,
  MultiSelect,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";

import Recipe from "../components/recipes/Recipe";
import RecipeForm from "../components/recipes/RecipeForm";
import RecipesList from "../components/recipes/RecipesList";
import Container from "../components/Container";

import { fetchRecipes } from "../state/recipes/recipesThunks";
import { useAppDispatch, useAppSelector } from "../state/hooks";

import {
  selectRecipes,
  selectRecipesStatus,
} from "../state/recipes/recipesSlice";

import Theme from "../helpers/theme";

import type { Recipe as RecipeType } from "../state/types";

function Recipes() {
  const { button, colours, contrastInset, contrastShadow } = Theme();

  const dispatch = useAppDispatch();

  const recipesStatus = useAppSelector(selectRecipesStatus);
  const recipes = useAppSelector(selectRecipes);

  useEffect(() => {
    if (recipesStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipesStatus]);

  const [filters, setFilters] = useState<string[]>([]);
  const [focusedRecipe, setFocusedRecipe] = useState(recipes[0]);

  const [showForm, { open, close }] = useDisclosure();
  const [showFilter, { open: openFilter, close: closeFilter }] =
    useDisclosure();

  const onFocusRecipeClick = (recipe: RecipeType) => {
    close();
    setFocusedRecipe(recipe);
  };

  const onSelectFilter = (filter: string) => {
    openFilter();
    setFilters([...filters, filter]);
  };

  const onClearFilters = () => {
    closeFilter();
    setFilters([]);
  };

  if (!focusedRecipe && recipes.length > 0) setFocusedRecipe(recipes[0]);

  if (recipes.length > 0)
    return (
      <Grid p="xs" h="100%" gutter="xs">
        <Grid.Col span={4}>
          <Container>
            <ScrollArea h="69vh">
              <Stack w="100%">
                <Flex w="100%" gap="xs" pr="4px">
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
                    onClick={showFilter ? onClearFilters : openFilter}
                  >
                    {showFilter ? <FaTimes /> : <FaFilter />}
                  </ActionIcon>
                </Flex>

                {showFilter && (
                  <MultiSelect
                    px="xs"
                    value={filters.map((filter) => filter.toUpperCase())}
                    hidePickedOptions
                    variant="unstyled"
                    onChange={setFilters}
                    placeholder="PICK FILTERS"
                    data={recipes.flatMap(({ tags }) => (tags ? tags : []))}
                    {...contrastInset}
                    styles={{
                      pill: {
                        height: "28px",
                        padding: "xs",
                        borderRadius: 0,
                        color: colours.dark,
                        background: colours.light,
                        border: `solid 4px ${colours.dark}`,
                        boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
                      },
                    }}
                  />
                )}

                <RecipesList
                  recipes={recipes}
                  focusedRecipe={focusedRecipe}
                  onRecipeClick={onFocusRecipeClick}
                  onFilterClick={onSelectFilter}
                />
              </Stack>
            </ScrollArea>
          </Container>
        </Grid.Col>

        <Grid.Col span={8}>
          <Box w="100%" p="xs" bd={`dotted 4px ${colours.blue}`}>
            <ScrollArea h="69vh">
              {showForm ? (
                <RecipeForm onClose={close} />
              ) : (
                <Recipe {...focusedRecipe} />
              )}
            </ScrollArea>
          </Box>
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
