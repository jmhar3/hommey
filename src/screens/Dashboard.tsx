import { Flex, Grid, Stack, Text } from "@mantine/core";

import InCamera from "../components/dashboard/InCamera";
import Hydrangea from "../components/dashboard/Hydrangea";
import Recommendations from "../components/dashboard/Recommendations";
import Reminders from "../components/dashboard/Reminders";
import Quests from "../components/dashboard/Quests";
import ShoppingList from "../components/dashboard/ShoppingList";

function Dashboard() {
  return (
    <Grid grow p="xs">
      <Grid.Col span={8}>
        <Grid grow p="xs">
          <Grid.Col span={12}>
            <Flex>
              <Stack>
                <Text>*insert todays date here*</Text>
                <Text>Good Morning</Text>
              </Stack>
              <Text>
                *insert current weather: icon, temp, uv, chance of rain*
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack>
              <InCamera />
              <Hydrangea />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack>
              <Recommendations />
              <Reminders />
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack>
          <Quests />
          <ShoppingList />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Dashboard;
