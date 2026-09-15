import { useEffect } from "react";
import { Button, Group, Image, Progress, Stack } from "@mantine/core";

import Container from "../Container";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { fetchHydrangea } from "../../state/hydrangea/hydrangeaThunks";

import {
  selectHydrangea,
  selectHydrangeaStatus,
} from "../../state/hydrangea/hydrangeaSlice";

import { colours, contrastInset, lightInset } from "../../helpers/theme";

import hydrangea from "../../../public/assets/hydrangea.png";

function Hydrangea() {
  const dispatch = useAppDispatch();

  const hydrangeaStatus = useAppSelector(selectHydrangeaStatus);
  const hydrangeaData = useAppSelector(selectHydrangea);

  useEffect(() => {
    if (hydrangeaStatus === "idle") {
      dispatch(fetchHydrangea());
    }
  }, [dispatch, hydrangeaStatus]);

  return (
    <Container>
      <Stack gap="xs">
        <Stack gap="5">
          <Image src={hydrangea} w="100%" h="100%" {...lightInset} />

          {hydrangeaData && (
            <Progress
              size="lg"
              radius={0}
              bg={colours.mid}
              color={colours.contrast}
              transitionDuration={200}
              value={hydrangeaData.value}
              bd={`solid 2px ${colours.dark}`}
            />
          )}
        </Stack>

        <Group grow gap="xs">
          <Button
            {...contrastInset}
            style={{
              boxShadow: `inset -3px -3px 0px 1px ${colours.blue}`,
            }}
          >
            LIL DRINK
          </Button>

          <Button
            {...contrastInset}
            style={{
              boxShadow: `inset -3px -3px 0px 1px ${colours.blue}`,
            }}
          >
            BIG DRINK
          </Button>

          <Button
            {...contrastInset}
            style={{
              boxShadow: "inset -3px -3px 0px 1px crimson",
            }}
          >
            REFILL
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default Hydrangea;
