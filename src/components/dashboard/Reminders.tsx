import { Divider, Stack, Text, Title } from "@mantine/core";

function Reminders() {
  return (
    <Stack p="xs" gap="xs" bdrs="3" bd="solid 2px brown">
      <Title>Don't Forget!</Title>

      <Divider size="sm" color="brown" />

      <Text>Repair Noah's Clasp</Text>
    </Stack>
  );
}

export default Reminders;
