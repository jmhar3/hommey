import { FaCartPlus, FaEdit, FaStar } from "react-icons/fa";

import {
  ActionIcon,
  Badge,
  Checkbox,
  Divider,
  Flex,
  Group,
  List,
  Stack,
  Title,
} from "@mantine/core";

import Theme from "../../helpers/theme";

import type { Recipe as RecipeType } from "../../state/types";

function Recipe(recipe: RecipeType) {
  const { colours, contrastShadow, lightInset } = Theme();

  const onFavourite = () => {};

  return (
    <Stack gap="xs">
      <Flex align="center" justify="space-between">
        <Title>{recipe.title}</Title>

        <Flex align="center" gap="xs">
          <ActionIcon
            size="xl"
            onClick={onFavourite}
            {...contrastShadow}
            bg={recipe.favourite ? colours.contrast : colours.white}
            style={{
              boxShadow: recipe.favourite
                ? "none"
                : `3px 3px 0px 1px ${colours.contrast}`,
            }}
          >
            <FaStar />
          </ActionIcon>

          <ActionIcon size="xl" {...contrastShadow}>
            <FaCartPlus />
          </ActionIcon>

          <ActionIcon size="xl" {...contrastShadow}>
            <FaEdit />
          </ActionIcon>
        </Flex>
      </Flex>

      {recipe.tags && (
        <Flex gap="xs">
          {recipe.tags.map((tag) => (
            <Badge key={tag} py="xs" {...lightInset}>
              {tag}
            </Badge>
          ))}
        </Flex>
      )}

      <Divider size="lg" color={colours.blue} />

      <Title>Ingredients</Title>

      <Group>
        {recipe.ingredients.map((ingredient) => (
          <Checkbox
            size="lg"
            key={ingredient}
            label={ingredient}
            color={colours.contrast}
            styles={{
              input: {
                borderRadius: 0,
                background: colours.mid,
                border: `solid 4px ${colours.dark}`,
                boxShadow: `3px 3px 0px 1px ${colours.contrast}`,
              },
            }}
          />
        ))}
      </Group>

      <Divider size="lg" color={colours.blue} />

      <Title>Steps</Title>

      <List type="ordered">
        {recipe.steps.map((step) => (
          <List.Item key={step}>{step}</List.Item>
        ))}
      </List>

      {recipe.notes && (
        <>
          <Divider size="lg" color={colours.blue} />

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
