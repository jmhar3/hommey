import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
  Flex,
  Stack,
  Select,
  TextInput,
  ActionIcon,
  NumberInput,
  Group,
} from "@mantine/core";

import { useAppDispatch } from "../../state/hooks";
import { upsertQuests } from "../../state/quests/questsThunks";

import Theme from "../../helpers/theme";

import type { Quest } from "../../state/types";

function QuestForm({ onComplete }: { onComplete?: () => void }) {
  const { colours, contrastShadow, input } = Theme();

  const dispatch = useAppDispatch();

  const blankForm: Partial<Quest> = {
    label: "",
    frequency: 0,
    value: 0,
    mana_cost: 0,
  };

  const [questForm, setQuestForm] = useState(blankForm);

  const addNewQuest = () => {
    dispatch(
      upsertQuests([
        {
          ...questForm,
          type: questForm.type as "attack" | "power_up" | "heal",
        },
      ]),
    ).then((data) => {
      if (data.payload) {
        if (onComplete) onComplete();
        setQuestForm(blankForm);
      }
    });
  };

  return (
    <Stack gap="xs">
      <TextInput
        value={questForm.label}
        placeholder="QUEST"
        onChange={(event) =>
          setQuestForm({
            ...questForm,
            label: event.currentTarget.value.toUpperCase(),
          })
        }
        {...input}
      />

      <NumberInput
        value={questForm.frequency}
        placeholder="FREQUENCY (IN DAYS)"
        onChange={(value) =>
          setQuestForm({ ...questForm, frequency: Number(value) })
        }
        {...input}
      />

      <Group grow>
        <NumberInput
          value={questForm.value}
          placeholder="DAMAGE DEALT"
          onChange={(value) =>
            setQuestForm({ ...questForm, value: Number(value) })
          }
          {...input}
        />

        <NumberInput
          value={questForm.mana_cost}
          placeholder="MANA COST"
          onChange={(value) =>
            setQuestForm({ ...questForm, mana_cost: Number(value) })
          }
          {...input}
        />
      </Group>

      <Flex gap="xs" align="center">
        <Select
          {...input}
          value={questForm.type}
          placeholder="TYPE"
          onChange={(value) =>
            setQuestForm({
              ...questForm,
              type: value as "heal" | "attack" | "power_up",
            })
          }
          data={[
            { label: "HEAL", value: "heal" },
            { label: "ATTACK", value: "attack" },
            { label: "POWER UP", value: "power_up" },
          ]}
          styles={{
            dropdown: {
              borderRadius: 0,
              background: colours.light,
              border: `solid 4px ${colours.dark}`,
              boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
            },
            input: {
              fontSize: "1.1em",
            },
            option: {
              fontSize: "1.1em",
            },
          }}
        />

        <ActionIcon size="xl" onClick={addNewQuest} {...contrastShadow}>
          <FaPlus />
        </ActionIcon>
      </Flex>
    </Stack>
  );
}

export default QuestForm;
