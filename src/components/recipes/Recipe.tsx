import { ActionIcon, Badge, Flex, List, Stack, Title } from "@mantine/core";
import type { Recipe as RecipeType } from "../../state/types";

function Recipe(recipe: RecipeType) {
  return (
    <Stack>
      <Flex justify="space-between">
        <Title>{recipe.title}</Title>
        <ActionIcon variant="transparent" />
      </Flex>

      {recipe.tags && (
        <Flex>
          {recipe.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Flex>
      )}

      <Title>Ingredients</Title>
      <List>
        {recipe.ingredients.map((ingredient) => (
          <List.Item key={ingredient}>{ingredient}</List.Item>
        ))}
      </List>

      <Title>Steps</Title>
      <List>
        {recipe.steps.map((step) => (
          <List.Item key={step}>{step}</List.Item>
        ))}
      </List>

      {recipe.notes && (
        <>
          <Title>Notes</Title>
          <List>
            {recipe.notes.map((note) => (
              <List.Item key={note}>{note}</List.Item>
            ))}
          </List>
        </>
      )}
    </Stack>
  );
}

export default Recipe;
