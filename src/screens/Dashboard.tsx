import { Flex, Stack, Text } from "@mantine/core";

import InCamera from "../components/dashboard/InCamera";
import Hydrangea from "../components/dashboard/Hydrangea";
import Recommendations from "../components/dashboard/Recommendations";
import Reminders from "../components/dashboard/Reminders";
import Quests from "../components/dashboard/Quests";
import ShoppingList from "../components/dashboard/ShoppingList";

function Dashboard() {
  return (
    <Flex>
      <Stack>
        <Flex>
          <Stack>
            <Text>*insert todays date here*</Text>
            <Text>Good Morning</Text>
          </Stack>
          <Text>*insert current weather: icon, temp, uv, chance of rain*</Text>
        </Flex>
        <Flex>
          <Stack>
            <InCamera />
            <Hydrangea />
          </Stack>
          <Stack>
            <Recommendations />
            <Reminders />
          </Stack>
        </Flex>
      </Stack>
      <Stack>
        <Quests />
        <ShoppingList />
      </Stack>
    </Flex>
  );
}

export default Dashboard;
