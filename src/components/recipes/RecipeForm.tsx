import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FaStar, FaTrash } from "react-icons/fa";

import {
  ActionIcon,
  Button,
  Chip,
  Flex,
  Group,
  Stack,
  TagsInput,
  Textarea,
  TextInput,
} from "@mantine/core";

import type { Recipe } from "../../state/types";

interface RecipeFormProps {
  onClose: () => void;
}

function RecipeForm(props: RecipeFormProps) {
  const [form, setForm] = useState<Recipe | Omit<Recipe, "id">>({
    title: "",
    ingredients: [""],
    steps: [""],
    favourite: false,
  });

  // notes?: string[];

  return (
    <Stack>
      <Group grow>
        <Stack align="flex-start" justify="flex-start" w="100%">
          <Flex gap="xs" w="100%" align="flex-end">
            <TextInput
              w="100%"
              withAsterisk
              label="Title"
              value={form.title}
              onChange={(event) =>
                setForm((prevForm) => ({
                  ...prevForm,
                  title: event.target.value,
                }))
              }
            />

            <Chip
              size="lg"
              radius="sm"
              color="brown"
              icon={<FaStar />}
              checked={form.favourite}
              onChange={() =>
                setForm((prevForm) => ({
                  ...prevForm,
                  favourite: !prevForm.favourite,
                }))
              }
            >
              Favourite
            </Chip>
          </Flex>

          <TextInput
            w="100%"
            withAsterisk
            label="Source"
            value={form.source}
            onChange={(event) =>
              setForm((prevForm) => ({
                ...prevForm,
                source: event.target.value,
              }))
            }
          />
        </Stack>

        <Stack>
          {form.ingredients.map((ingredient, index) => (
            <TextInput
              withAsterisk
              key={uuid()}
              value={ingredient}
              label={index === 0 ? "Ingredients" : ""}
              onChange={(event) =>
                setForm((prevForm) => ({
                  ...prevForm,
                  ingredients: prevForm.ingredients.map((ing, ind) =>
                    index === ind ? event.target.value : ing,
                  ),
                }))
              }
              rightSection={
                <ActionIcon
                  color="brown"
                  onClick={() =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      ingredients: prevForm.ingredients.flatMap((ing, ind) =>
                        index === ind ? [] : ing,
                      ),
                    }))
                  }
                >
                  <FaTrash />
                </ActionIcon>
              }
            />
          ))}

          <Button
            color="brown"
            onClick={() =>
              setForm((prevForm) => ({
                ...prevForm,
                ingredients: [...prevForm.ingredients, ""],
              }))
            }
          >
            Add Ingredient
          </Button>
        </Stack>
      </Group>

      <Stack>
        {form.steps.map((ingredient, index) => (
          <TextInput
            withAsterisk
            key={uuid()}
            value={ingredient}
            leftSection={`${index + 1}.`}
            label={index === 0 ? "Steps" : ""}
            onChange={(event) =>
              setForm((prevForm) => ({
                ...prevForm,
                steps: prevForm.steps.map((ing, ind) =>
                  index === ind ? event.target.value : ing,
                ),
              }))
            }
            rightSection={
              <ActionIcon
                color="brown"
                onClick={() =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    steps: prevForm.steps.flatMap((ing, ind) =>
                      index === ind ? [] : ing,
                    ),
                  }))
                }
              >
                <FaTrash />
              </ActionIcon>
            }
          />
        ))}

        <Button
          color="brown"
          onClick={() =>
            setForm((prevForm) => ({
              ...prevForm,
              steps: [...prevForm.steps, ""],
            }))
          }
        >
          Add Step
        </Button>
      </Stack>

      <Textarea
        label="Notes"
        value={form.source}
        onChange={(event) =>
          setForm((prevForm) => ({ ...prevForm, source: event.target.value }))
        }
      />

      <TagsInput
        w="100%"
        label="Tags"
        color="brown"
        value={form.tags}
        onChange={(tags) =>
          setForm((prevForm) => ({
            ...prevForm,
            tags: tags,
          }))
        }
        isDuplicate={(tagValue, currentTags) =>
          currentTags.some((val) => val === tagValue)
        }
      />

      <Flex gap="xs" justify="flex-end">
        <Button color="brown" variant="outline" onClick={props.onClose}>
          Cancel
        </Button>
        <Button color="brown" onClick={props.onClose}>
          Save
        </Button>
      </Flex>
    </Stack>
  );
}

export default RecipeForm;
