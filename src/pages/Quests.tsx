import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Stack } from "@mantine/core";

import QuestForm from "../components/quests/QuestForm.tsx";

import { fetchQuests } from "../state/quests/questsThunks.ts";
import { useAppDispatch, useAppSelector } from "../state/hooks.ts";
import { selectQuestsStatus } from "../state/quests/questsSlice.ts";

import Theme from "../helpers/theme.ts";

import QuestList from "../components/quests/QuestList.tsx";

function Quests() {
  const { colours, lightInset, button } = Theme();

  const [showForm, { open, close }] = useDisclosure();

  const dispatch = useAppDispatch();
  const questsStatus = useAppSelector(selectQuestsStatus);

  useEffect(() => {
    if (questsStatus === "idle") {
      dispatch(fetchQuests());
    }
  }, [dispatch, questsStatus]);

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

      <QuestList />
    </Stack>
  );
}

export default Quests;
