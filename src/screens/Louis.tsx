import { Group, Stack } from "@mantine/core";
import { FaDog, FaWalking } from "react-icons/fa";

import QuestActionIcon from "../components/quests/QuestActionIcon";

import { selectQuests } from "../state/quests/questsSlice";
import { useAppSelector } from "../state/hooks";

function Louis() {
  const quests = useAppSelector(selectQuests);

  const walk = quests.find(
    ({ id }) => id === "c8c44479-95ec-46ea-8f40-c529825f52eb",
  );

  const brush = quests.find(
    ({ id }) => id === "0a12351a-937a-41b4-ad58-7274fa1ad777",
  );

  return (
    <Stack>
      <Group grow pb="3">
        {walk && <QuestActionIcon icon={<FaWalking />} quest={walk} />}
        {brush && <QuestActionIcon icon={<FaDog />} quest={brush} />}
      </Group>
    </Stack>
  );
}

export default Louis;
