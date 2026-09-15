import { ActionIcon, Badge, Flex, List, Stack, Title } from "@mantine/core";
import { FaCartPlus, FaEdit, FaStar } from "react-icons/fa";

import type { Recipe as RecipeType } from "../../state/types";

function Recipe(recipe: RecipeType) {
  const onFavourite = () => {};

  return (
    <Stack>
      <Flex align="center" justify="space-between">
        <Title>{recipe.title}</Title>

        <Flex align="center" gap="xs">
          <ActionIcon
            onClick={onFavourite}
            color={recipe.favourite ? "gold" : "grey"}
          >
            <FaStar />
          </ActionIcon>

          <ActionIcon color="brown">
            <FaCartPlus />
          </ActionIcon>

          <ActionIcon color="brown">
            <FaEdit />
          </ActionIcon>
        </Flex>
      </Flex>

      {recipe.tags && (
        <Flex gap="xs">
          {recipe.tags.map((tag) => (
            <Badge key={tag} radius="xs">
              {tag}
            </Badge>
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
