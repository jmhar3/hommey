import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FaStar, FaTrash } from "react-icons/fa";

import {
  ActionIcon,
  Button,
  Flex,
  Stack,
  TagsInput,
  Text,
  TextInput,
} from "@mantine/core";

import {
  input,
  shadow,
  button,
  colours,
  contrastShadow,
} from "../../helpers/theme";

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

  return (
    <Stack gap="xs">
      <Flex gap="xs" w="100%" align="flex-end">
        <TextInput
          {...input}
          withAsterisk
          placeholder="Title"
          value={form.title}
          onChange={(event) =>
            setForm((prevForm) => ({
              ...prevForm,
              title: event.target.value,
            }))
          }
        />

        <ActionIcon
          size="xl"
          onClick={() =>
            setForm((prevForm) => ({
              ...prevForm,
              favourite: !prevForm.favourite,
            }))
          }
          {...contrastShadow}
          bg={form.favourite ? colours.contrast : colours.white}
          style={{
            boxShadow: form.favourite
              ? "none"
              : `3px 3px 0px 1px ${colours.contrast}`,
          }}
        >
          <FaStar />
        </ActionIcon>
      </Flex>

      <TextInput
        {...input}
        withAsterisk
        placeholder="Source"
        value={form.source}
        onChange={(event) =>
          setForm((prevForm) => ({
            ...prevForm,
            source: event.target.value,
          }))
        }
      />

      <TagsInput
        label="Tags"
        {...input}
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

      <Stack p="xs" gap="xs" my="3px" {...shadow} bg={colours.white}>
        <Text>INGREDIENTS</Text>

        {form.ingredients.map((ingredient, index) => (
          <TextInput
            {...input}
            withAsterisk
            key={uuid()}
            value={ingredient}
            onChange={(event) =>
              setForm((prevForm) => ({
                ...prevForm,
                ingredients: prevForm.ingredients.map((ing, ind) =>
                  index === ind ? event.target.value : ing,
                ),
              }))
            }
            rightSection={
              index === 0 ? undefined : (
                <ActionIcon
                  {...contrastShadow}
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
              )
            }
          />
        ))}

        <Button
          {...button}
          onClick={() =>
            setForm((prevForm) => ({
              ...prevForm,
              ingredients: [...prevForm.ingredients, ""],
            }))
          }
        >
          ADD INGREDIENT
        </Button>
      </Stack>

      <Stack p="xs" gap="xs" my="3px" {...shadow} bg={colours.white}>
        <Text>STEPS</Text>

        {form.steps.map((ingredient, index) => (
          <TextInput
            {...input}
            withAsterisk
            key={uuid()}
            value={ingredient}
            leftSection={`${index + 1}.`}
            onChange={(event) =>
              setForm((prevForm) => ({
                ...prevForm,
                steps: prevForm.steps.map((ing, ind) =>
                  index === ind ? event.target.value : ing,
                ),
              }))
            }
            rightSection={
              index === 0 ? undefined : (
                <ActionIcon
                  {...contrastShadow}
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
              )
            }
          />
        ))}

        <Button
          {...button}
          onClick={() =>
            setForm((prevForm) => ({
              ...prevForm,
              steps: [...prevForm.steps, ""],
            }))
          }
        >
          ADD STEP
        </Button>
      </Stack>

      <Stack p="xs" gap="xs" my="3px" {...shadow} bg={colours.white}>
        <Text>NOTES</Text>

        {form.notes?.map((note, index) => (
          <TextInput
            {...input}
            withAsterisk
            key={uuid()}
            value={note}
            onChange={(event) =>
              setForm((prevForm) => ({
                ...prevForm,
                notes: prevForm.notes
                  ? prevForm.notes.map((ing, ind) =>
                      index === ind ? event.target.value : ing,
                    )
                  : [event.target.value],
              }))
            }
            rightSection={
              <ActionIcon
                {...contrastShadow}
                onClick={() =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    notes: prevForm.notes?.flatMap((ing, ind) =>
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
          {...button}
          onClick={() =>
            setForm((prevForm) => ({
              ...prevForm,
              notes: prevForm.notes ? [...prevForm.notes, ""] : [""],
            }))
          }
        >
          ADD NOTE
        </Button>
      </Stack>

      <Flex gap="xs" justify="flex-end">
        <Button onClick={props.onClose} {...button}>
          CANCEL
        </Button>

        <Button onClick={props.onClose} {...button}>
          SAVE
        </Button>
      </Flex>
    </Stack>
  );
}

export default RecipeForm;
