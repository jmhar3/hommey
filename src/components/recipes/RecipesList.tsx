import { Badge, Divider, Flex, Stack, Text } from "@mantine/core";

import type { Recipe } from "../../state/types";

interface ListItemProps extends Recipe {
  onClick: () => void;
  isFocused: boolean;
}

function ListItem(recipe: ListItemProps) {
  return (
    <Stack
      p="xs"
      bdrs={3}
      bg={recipe.isFocused ? "brown" : "lightbrown"}
      key={recipe.id}
      onClick={recipe.onClick}
    >
      <Text>{recipe.title}</Text>
      {recipe.tags && (
        <Flex>
          {recipe.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Flex>
      )}
    </Stack>
  );
}

interface RecipesListProps {
  recipes: Recipe[];
  focusedRecipe: Recipe;
  onRecipeClick: (recipe: Recipe) => void;
}
function RecipesList({
  recipes,
  focusedRecipe,
  onRecipeClick,
}: RecipesListProps) {
  return (
    <Flex h="100%" gap="xs">
      <Stack gap="xs" w="100%">
        {recipes.map((recipe) => (
          <ListItem
            key={recipe.id}
            {...recipe}
            isFocused={recipe.id === focusedRecipe.id}
            onClick={() => onRecipeClick(recipe)}
          />
        ))}
      </Stack>

      <Divider orientation="vertical" bd="2px solid brown" />
    </Flex>
  );
}

export default RecipesList;
