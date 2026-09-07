import { Button, Group, Image, Stack, Title } from "@mantine/core";

import hydrangea from "../../../public/assets/hydrangea.png";

function Hydrangea() {
  return (
    <Stack p="xs" bdrs="3" bd="solid 2px brown">
      <Title c="cornflowerblue">Stay Hydrated with Hydrangea</Title>

      <Image src={hydrangea} w="100%" h="100%" />

      <Group grow gap="xs">
        <Button
          variant="outline"
          color="cornflowerblue"
          bd="solid 2px cornflowerblue"
        >
          Lil Drink
        </Button>

        <Button
          variant="outline"
          color="cornflowerblue"
          bd="solid 2px cornflowerblue"
        >
          Big Drink
        </Button>

        <Button variant="outline" color="brown" bd="solid 2px brown">
          Refill
        </Button>
      </Group>
    </Stack>
  );
}

export default Hydrangea;
