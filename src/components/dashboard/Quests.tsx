import dayjs from "dayjs";
import { useMemo } from "react";

import {
  FaDog,
  FaBeer,
  FaBroom,
  FaWalking,
  FaAirFreshener,
} from "react-icons/fa";

import {
  Group,
  Stack,
  Title,
  Button,
  Divider,
  ScrollArea,
} from "@mantine/core";

import Container from "../Container";
import QuestButton from "../quests/QuestButton";
import QuestActionIcon from "../quests/QuestActionIcon";

import { useAppSelector } from "../../state/hooks";
import { selectQuests } from "../../state/quests/questsSlice";

import Theme from "../../helpers/theme";

function Quests() {
  const { colours, lightInset } = Theme();

  const quests = useAppSelector(selectQuests);

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
    <Container>
      <Stack gap="xs">
        <Title>Quest Log</Title>

        <Stack gap="xs">
          <Divider size="lg" color={colours.contrast} />

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

          <Divider size="lg" color={colours.contrast} />

          <ScrollArea
            h="52.5vh"
            type="auto"
            offsetScrollbars
            styles={{
              scrollbar: {
                padding: 0,
                paddingRight: "3px",
                borderRadius: 0,
                background: colours.light,
                border: `solid 4px ${colours.dark}`,
              },
              thumb: {
                borderRadius: 0,
                background: colours.contrast,
                border: `solid 2px ${colours.contrast}`,
              },
            }}
          >
            <Stack pr="xs">
              {dueQuests.map((quest) => (
                <QuestButton key={quest.id} {...quest} />
              ))}

              {completedQuests.map((quest) => (
                <Button
                  key={quest.id}
                  disabled
                  {...lightInset}
                  td="line-through"
                >
                  {quest.label.toUpperCase()}
                </Button>
              ))}
            </Stack>
          </ScrollArea>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Quests;
