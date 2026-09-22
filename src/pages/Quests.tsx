import { Box, Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuestForm from "../components/quests/QuestForm.tsx";

import Theme from "../helpers/theme.ts";
import QuestList from "../components/quests/QuestList.tsx";

function Quests() {
  const { colours, contrastShadow } = Theme();

  const [showForm, { open }] = useDisclosure();

  return (
    <Stack bg={colours.mid} mih="100vh" p="xs" gap="xs">
      {showForm ? (
        <Box bd={`dotted 2px ${colours.blue}`}>
          <QuestForm onComplete={close} />
        </Box>
      ) : (
        <Button {...contrastShadow} onClick={open}>
          ADD NEW QUEST
        </Button>
      )}

      <QuestList />
    </Stack>
  );
}

export default Quests;
