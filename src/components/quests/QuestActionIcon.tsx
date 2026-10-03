import dayjs from "dayjs";
import { useMemo } from "react";
import { ActionIcon } from "@mantine/core";
import { FaCheck } from "react-icons/fa";

import { useAppDispatch } from "../../state/hooks";
import { upsertQuests } from "../../state/quests/questsThunks";

import Theme from "../../helpers/theme";

import type { Quest } from "../../state/types";
import type { ReactElement } from "react";

interface QuestActionIconProps {
  quest: Quest;
  icon: ReactElement;
}

function QuestActionIcon({ quest, icon }: QuestActionIconProps) {
  const { button, colours } = Theme();

  const dispatch = useAppDispatch();

  const completeQuest = (quest: Quest) => {
    dispatch(
      upsertQuests([{ ...quest, last_completed_at: dayjs().toISOString() }]),
    );
  };

  const isComplete = useMemo(
    () => dayjs(quest.last_completed_at).isSame(dayjs(), "day"),
    [quest],
  );

  return (
    <ActionIcon
      {...button}
      c={isComplete ? colours.blue : colours.dark}
      bd={`solid 4px ${isComplete ? colours.blue : colours.dark}`}
      onClick={() => completeQuest(quest)}
    >
      {isComplete ? <FaCheck /> : icon}
    </ActionIcon>
  );
}

export default QuestActionIcon;
