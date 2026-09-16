import { useEffect, useMemo } from "react";
import { Button, Group, Image, Progress, Stack } from "@mantine/core";

import Container from "../Container";

import { useAppDispatch, useAppSelector } from "../../state/hooks";

import {
  fetchHydrangea,
  insertHydrangea,
} from "../../state/hydrangea/hydrangeaThunks";

import {
  selectHydrangea,
  selectHydrangeaStatus,
} from "../../state/hydrangea/hydrangeaSlice";

import { colours, contrastInset, lightInset } from "../../helpers/theme";

import hydrangea from "../../../public/assets/hydrangea.png";

const refill = 1500;
const lilDrink = 300;
const bigDrink = 1100;
const totalCapacity = 12000;

function Hydrangea() {
  const dispatch = useAppDispatch();

  const hydrangeaStatus = useAppSelector(selectHydrangeaStatus);
  const hydrangeaData = useAppSelector(selectHydrangea);

  useEffect(() => {
    if (hydrangeaStatus === "idle") {
      dispatch(fetchHydrangea());
    }
  }, [dispatch, hydrangeaStatus]);

  const hydrangeaPercent = useMemo(() => {
    if (hydrangeaData) return (hydrangeaData.value / totalCapacity) * 100;
  }, [hydrangeaData]);

  const onDrink = (
    type: "lil_drink" | "big_drink" | "refill",
    value: number,
  ) => {
    dispatch(insertHydrangea({ type: type, value: value }));
  };

  return (
    <Container>
      <Stack gap="xs">
        <Stack gap="5">
          <Image src={hydrangea} w="100%" h="100%" {...lightInset} />

          {hydrangeaPercent && (
            <Progress
              size="xl"
              radius={0}
              bg={colours.mid}
              color={colours.contrast}
              transitionDuration={200}
              bd={`solid 4px ${colours.dark}`}
              value={hydrangeaPercent}
            />
          )}
        </Stack>

        <Group grow gap="xs" w="100%">
          <Button
            p="0"
            h="44px"
            {...contrastInset}
            style={{
              boxShadow: `inset -3px -3px 0px 1px ${colours.blue}`,
            }}
            onClick={() => onDrink("lil_drink", hydrangeaData.value - lilDrink)}
          >
            LIL DRINK
          </Button>

          <Button
            p="0"
            h="44px"
            {...contrastInset}
            style={{
              boxShadow: `inset -3px -3px 0px 1px ${colours.blue}`,
            }}
            onClick={() => onDrink("big_drink", hydrangeaData.value - bigDrink)}
          >
            BIG DRINK
          </Button>

          <Button
            p="0"
            h="44px"
            {...contrastInset}
            style={{
              boxShadow: "inset -3px -3px 0px 1px crimson",
            }}
            onClick={() => onDrink("refill", hydrangeaData.value + refill)}
          >
            REFILL
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default Hydrangea;
