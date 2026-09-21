import { Badge, Flex, Stack, Text } from "@mantine/core";

import type { Recipe } from "../../state/types";

import Theme from "../../helpers/theme";

interface ListItemProps extends Recipe {
  onClick: () => void;
  isFocused: boolean;
  onFilterClick: (tag: string) => void;
}

function ListItem(recipe: ListItemProps) {
  const { colours, contrastShadow } = Theme();

  return (
    <Stack
      p="xs"
      key={recipe.id}
      onClick={recipe.onClick}
      {...contrastShadow}
      bg={recipe.isFocused ? colours.light : colours.mid}
    >
      <Text>{recipe.title.toUpperCase()}</Text>

      {recipe.tags && (
        <Flex gap="xs">
          {recipe.tags.map((tag) => (
            <Badge
              py="xs"
              key={tag}
              {...contrastShadow}
              onClick={() => recipe.onFilterClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </Flex>
      )}
    </Stack>
  );
}

interface RecipesListProps {
  recipes: Recipe[];
  focusedRecipe: Recipe;
  onFilterClick: (tag: string) => void;
  onRecipeClick: (recipe: Recipe) => void;
}
function RecipesList({
  recipes,
  onFilterClick,
  focusedRecipe,
  onRecipeClick,
}: RecipesListProps) {
  return (
    <Stack gap="xs" w="100%">
      {recipes.map((recipe) => (
        <ListItem
          {...recipe}
          key={recipe.id}
          onFilterClick={onFilterClick}
          onClick={() => onRecipeClick(recipe)}
          isFocused={recipe.id === focusedRecipe.id}
        />
      ))}
    </Stack>
  );
}

export default RecipesList;
