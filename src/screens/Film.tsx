import { Container, Grid, Text } from "@mantine/core";

function Film() {
  return (
    <Grid p="xs" h="100vh">
      <Grid.Col span={4}>
        <Container>
          <Text>Stacked list of all available cameras</Text>
        </Container>
      </Grid.Col>

      <Grid.Col span={8}>
        <Container>
          <Text>Flex list of all available film</Text>
        </Container>
      </Grid.Col>
    </Grid>
  );
}

export default Film;
