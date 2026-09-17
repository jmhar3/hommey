import { useState } from "react";
import { FaBrain, FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { ActionIcon, Group, Stack, Text, Title } from "@mantine/core";

import Container from "../Container";

import { contrastShadow } from "../../helpers/theme";

function Recommendations() {
  const [selection, setSelection] = useState<"chill" | "brain" | "body">();

  return (
    <Container>
      <Stack>
        <Title>Rise & Shine</Title>

        <Text>How are you feeling?</Text>

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
              {...contrastShadow}
            >
              <FaHandHoldingHeart size="lg" />
            </ActionIcon>

            <ActionIcon
              p="xs"
              h="6em"
              onClick={() => setSelection("brain")}
              {...contrastShadow}
            >
              <FaBrain size="lg" />
            </ActionIcon>

            <ActionIcon
              p="xs"
              h="6em"
              onClick={() => setSelection("body")}
              {...contrastShadow}
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
