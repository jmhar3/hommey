import { Box, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuestForm from "../components/quests/QuestForm.tsx";

import Theme from "../helpers/theme.ts";
import QuestList from "../components/quests/QuestList.tsx";

function Quests() {
  const { colours, contrastShadow } = Theme();

  const [showForm, { open }] = useDisclosure();

  return (
    <Box bg={colours.mid} mih="100vh">
      {showForm ? (
        <QuestForm onComplete={close} />
      ) : (
        <Button {...contrastShadow} onClick={open}>
          ADD NEW QUEST
        </Button>
      )}

      <QuestList />
    </Box>
  );
}

export default Quests;
