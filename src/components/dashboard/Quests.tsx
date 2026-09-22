import { Divider, ScrollArea, Stack, Title } from "@mantine/core";

import Container from "../Container";
import QuestList from "../quests/QuestList";

import Theme from "../../helpers/theme";

function Quests() {
  const { colours } = Theme();

  return (
    <Container>
      <Stack gap="xs">
        <Title>Quest Log</Title>

        <Stack gap={0}>
          <Divider bd={`2px solid ${colours.contrast}`} />

          <ScrollArea
            h="62vh"
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
            <QuestList />
          </ScrollArea>

          <Divider bd={`2px solid ${colours.contrast}`} />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Quests;
