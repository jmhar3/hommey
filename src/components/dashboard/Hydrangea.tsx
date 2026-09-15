import { Button, Group, Image, Stack, Title } from "@mantine/core";

import hydrangea from "../../../public/assets/hydrangea.png";
import Container from "../Container";

function Hydrangea() {
  return (
    <Container>
      <Stack>
        <Title c="cornflowerblue">Hydrangea</Title>

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
    </Container>
  );
}

export default Hydrangea;
