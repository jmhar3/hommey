import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FaArrowUp, FaDotCircle, FaTimes } from "react-icons/fa";

import {
  Text,
  Flex,
  Stack,
  Title,
  Button,
  Divider,
  ActionIcon,
} from "@mantine/core";

import Container from "../Container";

import Theme from "../../helpers/theme";

function CodeBreaker() {
  const { colours, button, contrastInset } = Theme();

  const codeColours = [
    "red",
    "blue",
    "green",
    "deeppink",
    "purple",
    "pink",
    "yellow",
    "orange",
  ];

  const [guesses, setGuesses] = useState<Array<string[]>>();
  const [selection, setSelection] = useState<string[]>([]);
  const [code, setCode] = useState<string[]>();

  const generateCode = () => {
    const randomIndex1 = Math.floor(Math.random() * codeColours.length);
    const randomIndex2 = Math.floor(Math.random() * codeColours.length);
    const randomIndex3 = Math.floor(Math.random() * codeColours.length);
    const randomIndex4 = Math.floor(Math.random() * codeColours.length);
    const randomIndex5 = Math.floor(Math.random() * codeColours.length);

    setCode([
      codeColours[randomIndex1],
      codeColours[randomIndex2],
      codeColours[randomIndex3],
      codeColours[randomIndex4],
      codeColours[randomIndex5],
    ]);
  };

  if (code === undefined) generateCode();

  const reset = () => {
    setSelection([]);
    setGuesses([]);
    generateCode();
  };

  const submitGuess = () => {
    setGuesses(guesses ? [...guesses, selection] : [selection]);
    setSelection([]);
  };

  return (
    <Stack p="xs" gap="xs" align="center">
      <Flex w="100%" justify="space-between">
        <Title>CODE BREAKER</Title>

        <Button {...button} onClick={reset}>
          RESET
        </Button>
      </Flex>

      <Container>
        <Stack gap="xs">
          <Flex justify="space-between" align="center">
            <Text>ENTER CODE:</Text>

            <Flex gap="xs" align="center">
              {selection.map((colour) => (
                <ActionIcon key={colour} radius="100%" color={colour}>
                  <FaDotCircle />
                </ActionIcon>
              ))}

              {Array.from({ length: 5 - selection.length }).map(() => (
                <ActionIcon key={uuid()} radius="100%" color="white">
                  <FaDotCircle />
                </ActionIcon>
              ))}
            </Flex>

            {selection.length > 0 && (
              <ActionIcon
                size="xl"
                {...contrastInset}
                onClick={() => setSelection([])}
              >
                <FaTimes size="1.5em" />
              </ActionIcon>
            )}
          </Flex>

          <Divider my="5" size="lg" color={colours.blue} />

          <Flex gap="xs" align="center" justify="space-between">
            <Flex gap="xs">
              {codeColours.map((colour) => (
                <ActionIcon
                  key={colour}
                  radius="100%"
                  color={colour}
                  onClick={() =>
                    selection.length < 5 && setSelection([...selection, colour])
                  }
                >
                  <FaDotCircle />
                </ActionIcon>
              ))}
            </Flex>

            {selection.length === 5 && (
              <ActionIcon size="xl" {...contrastInset} onClick={submitGuess}>
                <FaArrowUp size="1.5em" />
              </ActionIcon>
            )}
          </Flex>
        </Stack>
      </Container>

      <Divider w="100%" my="5" size="lg" color={colours.blue} label="GUESSES" />

      {guesses?.map((guess) => (
        <Flex key={guess.toString()} gap="xs">
          <Flex gap="xs">
            {guess.map((colour) => (
              <ActionIcon key={colour} radius="100%" color={colour}>
                <FaDotCircle />
              </ActionIcon>
            ))}
          </Flex>

          <Divider
            my="5"
            size="lg"
            color={colours.blue}
            orientation="vertical"
          />

          <Flex gap="xs">
            {Array.from({ length: 5 }).map((_colour, index) => {
              const isCorrect = code && guess[index] === code[index];
              const isWrongPos = code?.includes(guess[index]);
              const indicator = isCorrect
                ? "green"
                : isWrongPos
                  ? "yellow"
                  : "red";

              return (
                <ActionIcon key={uuid()} radius="100%" color={indicator}>
                  <FaDotCircle />
                </ActionIcon>
              );
            })}
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}

export default CodeBreaker;
