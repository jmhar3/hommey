import { useEffect, useMemo } from "react";
import { Box, Group, Stack, Text, Title } from "@mantine/core";

import Container from "../Container";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { fetchQuests } from "../../state/quests/questsThunks";

import {
  selectQuests,
  selectQuestsStatus,
} from "../../state/quests/questsSlice";
import dayjs from "dayjs";

function Quests() {
  const dispatch = useAppDispatch();

  const questsStatus = useAppSelector(selectQuestsStatus);
  const quests = useAppSelector(selectQuests);

  useEffect(() => {
    if (questsStatus === "idle") {
      dispatch(fetchQuests());
    }
  }, [dispatch, questsStatus]);

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

  return (
    <Container>
      <Stack>
        <Title>Quests</Title>

        <Stack>
          {dueQuests.map((quest) => (
            <Text key={quest.id}>{quest.label}</Text>
          ))}
        </Stack>

        <Group grow gap="xs">
          <Box bg="pink" h="12.5em" bdrs="3">
            BOSS
          </Box>

          <Stack gap="xs">
            <Box bg="pink" h="6em" bdrs="3">
              Wah
            </Box>

            <Box bg="pink" h="6em" bdrs="3">
              Fae
            </Box>
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
}

export default Quests;
