import dayjs from "dayjs";
import { useDisclosure } from "@mantine/hooks";
import { FaCheck, FaPen, FaTimes } from "react-icons/fa";
import { ActionIcon, Flex, Stack, Text } from "@mantine/core";

import QuestForm from "./QuestForm";

import { useAppDispatch } from "../../state/hooks";
import { deleteQuest, upsertQuests } from "../../state/quests/questsThunks";

import Theme from "../../helpers/theme";

import type { Quest } from "../../state/types";

function QuestButton(quest: Quest) {
  const { colours, button, contrastShadow, focusedButton } = Theme();

  const [isClicked, { toggle, close: cancelFocus }] = useDisclosure();
  const [isEditing, { open: openForm, close: closeForm }] = useDisclosure();
  const [isLoading, { open: beginLoading, close: stopLoading }] =
    useDisclosure();

  const dispatch = useAppDispatch();

  const completeQuest = () => {
    beginLoading();
    if (quest.frequency === 0) {
      dispatch(deleteQuest(quest.id)).then((data) => {
        if (data.payload) {
          closeForm();
          cancelFocus();
        }
      });
    } else {
      dispatch(
        upsertQuests([{ ...quest, last_completed_at: dayjs().toISOString() }]),
      ).then((data) => {
        if (data.payload) {
          closeForm();
          cancelFocus();
        }
      });
    }
    stopLoading();
  };

  const style = isClicked ? focusedButton : button;

  return (
    <Stack
      {...style}
      justify="center"
      bg={isClicked ? colours.white : colours.light}
      py={isClicked ? "xs" : undefined}
    >
      <Flex align="center" justify="space-between">
        <Text fw="bold" onClick={toggle} w="100%">
          {quest.label.toUpperCase()}
        </Text>

        {isClicked &&
          (isEditing ? (
            <ActionIcon
              size="xl"
              loading={isLoading}
              onClick={closeForm}
              {...contrastShadow}
              loaderProps={{ type: "bars", color: colours.contrast }}
              style={{
                boxShadow: isLoading
                  ? "none"
                  : `3px 3px 0px 1px ${colours.contrast}`,
              }}
            >
              <FaTimes />
            </ActionIcon>
          ) : (
            <Flex gap="xs">
              <ActionIcon
                size="xl"
                loading={isLoading}
                onClick={openForm}
                {...contrastShadow}
                loaderProps={{ type: "bars", color: colours.contrast }}
                style={{
                  boxShadow: isLoading
                    ? "none"
                    : `3px 3px 0px 1px ${colours.contrast}`,
                }}
              >
                <FaPen />
              </ActionIcon>

              <ActionIcon
                size="xl"
                loading={isLoading}
                onClick={completeQuest}
                {...contrastShadow}
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
          ))}
      </Flex>

      {isClicked && isEditing && (
        <QuestForm quest={quest} onComplete={closeForm} />
      )}
    </Stack>
  );
}

export default QuestButton;
