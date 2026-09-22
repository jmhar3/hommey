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
import { useAppDispatch } from "../../state/hooks";
import { updateRecipe } from "../../state/recipes/recipesThunks";

import type { Recipe as RecipeType } from "../../state/types";

interface RecipeProps {
  recipe: RecipeType;
  onEditRecipe: () => void;
}

function Recipe({ recipe, onEditRecipe }: RecipeProps) {
  const { colours, contrastShadow, lightInset } = Theme();

  const dispatch = useAppDispatch();

  const onFavourite = () => {
    dispatch(updateRecipe({ ...recipe, favourite: !recipe.favourite }));
  };

  return (
    <Stack gap="xs">
      <Flex align="center" justify="space-between">
        <Title>{recipe.title}</Title>

        <Flex align="center" gap="xs" pr="4px">
          <ActionIcon
            size="xl"
            onClick={onFavourite}
            {...contrastShadow}
            style={{
              boxShadow: `3px 3px 0px 1px ${recipe.favourite ? colours.blue : colours.contrast}`,
            }}
            styles={{
              icon: {
                color: recipe.favourite ? colours.blue : colours.dark,
              },
            }}
          >
            <FaStar />
          </ActionIcon>

          <ActionIcon size="xl" {...contrastShadow}>
            <FaCartPlus />
          </ActionIcon>

          <ActionIcon size="xl" {...contrastShadow} onClick={onEditRecipe}>
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

      <Title size="1.6em">Ingredients</Title>

      <Group>
        {recipe.ingredients.map((ingredient) => (
          <Checkbox
            size="lg"
            key={ingredient}
            label={ingredient}
            color={colours.contrast}
            styles={{
              icon: { color: colours.blue },
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

      <Title size="1.6em">Steps</Title>

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
