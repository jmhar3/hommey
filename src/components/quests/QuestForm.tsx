import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";

import {
  Flex,
  Stack,
  Group,
  Select,
  TextInput,
  ActionIcon,
  NumberInput,
  Text,
  Switch,
} from "@mantine/core";

import { useAppDispatch } from "../../state/hooks";
import { deleteQuest, upsertQuests } from "../../state/quests/questsThunks";

import Theme from "../../helpers/theme";

import type { Quest } from "../../state/types";

interface QuestFormProps {
  quest?: Quest;
  onComplete?: () => void;
}

function QuestForm({ quest, onComplete }: QuestFormProps) {
  const { colours, contrastShadow, input, switchStyle } = Theme();

  const dispatch = useAppDispatch();

  const blankForm: Partial<Quest> = {
    label: "",
  };

  const [isRecurring, setIsRecurring] = useState(false);
  const [questForm, setQuestForm] = useState(quest || blankForm);

  const [isLoading, { open: beginLoading, close: stopLoading }] =
    useDisclosure();
  const [confirmDelete, { open: showConfirm, close: closeConfirm }] =
    useDisclosure();

  const handleDelete = () => {
    beginLoading();

    if (quest)
      dispatch(deleteQuest(quest.id)).then((data) => {
        if (data.payload) {
          if (onComplete) onComplete();
          setQuestForm(blankForm);
          closeConfirm();
        }
      });

    stopLoading();
  };

  const onSubmit = () => {
    beginLoading();

    if (quest?.frequency === null || quest?.frequency === 0) {
      handleDelete();
    } else {
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

      stopLoading();
    }
  };

  if (confirmDelete)
    return (
      <Flex>
        <Text fw="bold">ARE YOU SURE YOU WANT TO ABANDON THIS QUEST?</Text>

        <ActionIcon
          size="xl"
          {...contrastShadow}
          loading={isLoading}
          onClick={handleDelete}
          loaderProps={{ type: "bars", color: colours.contrast }}
          style={{
            boxShadow: isLoading
              ? "none"
              : `3px 3px 0px 1px ${colours.contrast}`,
          }}
        >
          <FaCheck />
        </ActionIcon>
      </Flex>
    );

  return (
    <Stack gap="xs">
      <Flex gap="xs" align="center" justify="center">
        <Text>ONCE OFF</Text>

        <Switch
          checked={isRecurring}
          {...switchStyle(isRecurring)}
          onChange={(event) => setIsRecurring(event.currentTarget.checked)}
        />

        <Text>RECURRING</Text>
      </Flex>

      <TextInput
        value={questForm.label?.toUpperCase()}
        placeholder="QUEST"
        onChange={(event) =>
          setQuestForm({
            ...questForm,
            label: event.currentTarget.value.toUpperCase(),
          })
        }
        {...input}
      />

      {isRecurring && (
        <NumberInput
          value={questForm.frequency || 0}
          placeholder="FREQUENCY"
          onChange={(value) =>
            setQuestForm({ ...questForm, frequency: Number(value) })
          }
          {...input}
        />
      )}

      <Group grow gap="xs">
        <NumberInput
          value={questForm.value}
          placeholder="DMG"
          onChange={(value) =>
            setQuestForm({ ...questForm, value: Number(value) })
          }
          {...input}
        />

        <NumberInput
          value={questForm.mana_cost}
          placeholder="MANA"
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

        <ActionIcon
          size="xl"
          loading={isLoading}
          onClick={onSubmit}
          {...contrastShadow}
          loaderProps={{ type: "bars", color: colours.contrast }}
          style={{
            boxShadow: isLoading
              ? "none"
              : `3px 3px 0px 1px ${colours.contrast}`,
          }}
        >
          {quest ? <FaCheck /> : <FaPlus />}
        </ActionIcon>

        <ActionIcon
          size="xl"
          {...contrastShadow}
          loading={isLoading}
          onClick={quest ? showConfirm : onComplete}
          loaderProps={{ type: "bars", color: colours.contrast }}
          style={{
            boxShadow: isLoading
              ? "none"
              : `3px 3px 0px 1px ${colours.contrast}`,
          }}
        >
          <FaTimes />
        </ActionIcon>
      </Flex>
    </Stack>
  );
}

export default QuestForm;
