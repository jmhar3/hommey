import { Grid, Stack } from "@mantine/core";

import InCamera from "../components/dashboard/InCamera";
import Hydrangea from "../components/dashboard/Hydrangea";
import Quests from "../components/dashboard/Quests";
import ShoppingList from "../components/dashboard/ShoppingList";
import Greeting from "../components/dashboard/Greeting";

function Dashboard() {
  return (
    <Grid grow p="xs">
      <Grid.Col span={8}>
        <Grid grow>
          <Grid.Col span={12}>
            <Greeting />
          </Grid.Col>

          <Grid.Col span={6}>
            <Stack>
              <InCamera />
              <ShoppingList />
            </Stack>
          </Grid.Col>

          <Grid.Col span={6}>
            <Stack>
              <Hydrangea />
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={4}>
        <Stack>
          <Quests />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Dashboard;
