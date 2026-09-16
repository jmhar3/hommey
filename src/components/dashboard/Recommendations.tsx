import { useState } from "react";
import { FaBrain, FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { ActionIcon, Group, Stack, Text, Title } from "@mantine/core";

import Container from "../Container";

import { contrastInset } from "../../helpers/theme";

function Recommendations() {
  const [selection, setSelection] = useState<"chill" | "brain" | "body">();

  return (
    <Container>
      <Stack>
        <Title>Feeling Breezy</Title>

        <Text>It's cold, wet and windy. Perfect day to stay at home.</Text>

        {selection ? (
          <>
            {selection === "chill" && <Text>Chill</Text>}
            {selection === "brain" && <Text>Brain</Text>}
            {selection === "body" && <Text>Body</Text>}
          </>
        ) : (
          <Group grow>
            <ActionIcon
              p="xs"
              h="6em"
              onClick={() => setSelection("chill")}
              {...contrastInset}
            >
              <FaHandHoldingHeart size="lg" />
            </ActionIcon>

            <ActionIcon
              p="xs"
              h="6em"
              onClick={() => setSelection("brain")}
              {...contrastInset}
            >
              <FaBrain size="lg" />
            </ActionIcon>

            <ActionIcon
              p="xs"
              h="6em"
              onClick={() => setSelection("body")}
              {...contrastInset}
            >
              <FaHeart size="lg" />
            </ActionIcon>
          </Group>
        )}
      </Stack>
    </Container>
  );
}

export default Recommendations;
