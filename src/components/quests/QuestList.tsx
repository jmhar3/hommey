import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
import { Button, Stack } from "@mantine/core";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { fetchQuests, upsertQuests } from "../../state/quests/questsThunks";

import {
  selectQuests,
  selectQuestsStatus,
} from "../../state/quests/questsSlice";

import Theme from "../../helpers/theme";

import type { Quest } from "../../state/types";

function QuestList() {
  const { contrastShadow, lightInset } = Theme();

  const dispatch = useAppDispatch();

  const questsStatus = useAppSelector(selectQuestsStatus);
  const quests = useAppSelector(selectQuests);

  useEffect(() => {
    if (questsStatus === "idle") {
      dispatch(fetchQuests());
    }
  }, [dispatch, questsStatus]);

  const completedQuests = useMemo(
    () =>
      quests.filter(({ last_completed_at }) => {
        return dayjs(last_completed_at).isSame(dayjs(), "day");
      }),
    [quests],
  );

  const dueQuests = useMemo(
    () =>
      quests.filter(({ last_completed_at, frequency }) => {
        const today = dayjs();
        const lastCompletedAt = dayjs(last_completed_at);
        const nextDueAt = lastCompletedAt.add(frequency, "day");
        return nextDueAt.isBefore(today) || nextDueAt.isSame(today, "day");
      }),
    [quests],
  );

  const healQuests = useMemo(
    () => dueQuests.filter(({ type }) => type === "heal"),
    [dueQuests],
  );

  const attackQuests = useMemo(
    () => dueQuests.filter(({ type }) => type === "attack"),
    [dueQuests],
  );

  const powerUpQuests = useMemo(
    () => dueQuests.filter(({ type }) => type === "power_up"),
    [dueQuests],
  );

  const completeQuest = (quest: Quest) => {
    dispatch(
      upsertQuests([{ ...quest, last_completed_at: dayjs().toISOString() }]),
    );
  };

  return (
    <Stack pr="xs" pt="xs">
      {[...healQuests, ...powerUpQuests, ...attackQuests].map((quest) => (
        <Button
          key={quest.id}
          onClick={() => completeQuest(quest)}
          {...contrastShadow}
        >
          {quest.label.toUpperCase()}
        </Button>
      ))}

      {completedQuests.map((quest) => (
        <Button key={quest.id} disabled {...lightInset} td="line-through">
          {quest.label.toUpperCase()}
        </Button>
      ))}
    </Stack>
  );
}

export default QuestList;
