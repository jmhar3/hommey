import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Divider, Group, Stack } from "@mantine/core";

import {
  FaAirFreshener,
  FaBeer,
  FaBroom,
  FaDog,
  FaWalking,
} from "react-icons/fa";

import QuestForm from "../components/quests/QuestForm.tsx";
import QuestActionIcon from "../components/quests/QuestActionIcon.tsx";

import { fetchQuests } from "../state/quests/questsThunks.ts";
import { useAppDispatch, useAppSelector } from "../state/hooks.ts";

import {
  selectQuests,
  selectQuestsStatus,
} from "../state/quests/questsSlice.ts";

import Theme from "../helpers/theme.ts";

import QuestButton from "../components/quests/QuestButton.tsx";

function Quests() {
  const { colours, lightInset, button } = Theme();

  const [showForm, { open, close }] = useDisclosure();

  const dispatch = useAppDispatch();
  const quests = useAppSelector(selectQuests);
  const questsStatus = useAppSelector(selectQuestsStatus);

  useEffect(() => {
    if (questsStatus === "idle") {
      dispatch(fetchQuests());
    }
  }, [dispatch, questsStatus]);

  const walk = quests.find(
    ({ id }) => id === "c8c44479-95ec-46ea-8f40-c529825f52eb",
  );

  const brush = quests.find(
    ({ id }) => id === "0a12351a-937a-41b4-ad58-7274fa1ad777",
  );

  const wipeBench = quests.find(
    ({ id }) => id === "5ee307e2-9d51-48fb-834d-547fcad07625",
  );

  const reloadDishwasher = quests.find(
    ({ id }) => id === "3f460904-9713-4ccc-8432-f0c34ae63eba",
  );

  const robovac = quests.find(
    ({ id }) => id === "b95578da-8b1d-4e98-9289-5a9ad516d535",
  );

  const completedQuests = useMemo(
    () =>
      quests.filter(({ last_completed_at, frequency }) => {
        return (
          frequency !== 1 && dayjs(last_completed_at).isSame(dayjs(), "day")
        );
      }),
    [quests],
  );

  const dueQuests = useMemo(
    () =>
      quests.filter(({ last_completed_at, frequency }) => {
        if (frequency === 1) return false;
        const today = dayjs();
        const lastCompletedAt = dayjs(last_completed_at);
        const nextDueAt = lastCompletedAt.add(frequency, "day");
        return nextDueAt.isBefore(today) || nextDueAt.isSame(today, "day");
      }),
    [quests],
  );

  return (
    <Stack bg={colours.mid} mih="100vh" p="xs" gap="xs">
      {showForm ? (
        <Box p="xs" {...lightInset} bg={colours.white}>
          <QuestForm onComplete={close} />
        </Box>
      ) : (
        <Button {...button} onClick={open}>
          ADD NEW QUEST
        </Button>
      )}

      {quests.length > 0 && (
        <Stack p="xs" bd={`dotted 4px ${colours.blue}`}>
          <Group grow pb="3">
            {walk && <QuestActionIcon icon={<FaWalking />} quest={walk} />}
            {brush && <QuestActionIcon icon={<FaDog />} quest={brush} />}
            {wipeBench && (
              <QuestActionIcon icon={<FaAirFreshener />} quest={wipeBench} />
            )}
            {reloadDishwasher && (
              <QuestActionIcon icon={<FaBeer />} quest={reloadDishwasher} />
            )}
            {robovac && <QuestActionIcon icon={<FaBroom />} quest={robovac} />}
          </Group>

          <Divider bd={`2px solid ${colours.blue}`} />

          {dueQuests.map((quest) => (
            <QuestButton key={quest.id} {...quest} />
          ))}

          {completedQuests.map((quest) => (
            <Button key={quest.id} disabled {...lightInset} td="line-through">
              {quest.label.toUpperCase()}
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default Quests;
