import { Card, Text, Flex } from "@chakra-ui/react";

const SessionItem = () => {
  return (
    <Card
      color="white"
      bgColor="t_light"
      w="full"
      rounded={"2xl"}
      justifyContent={"space-between"}
    >
      <Flex
        w="full"
        h="full"
        opacity={0.6}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={6}
      >
        <Text>Name</Text>
        <Text>Date</Text>
        <Text>Characters</Text>
        <Text>Score</Text>
      </Flex>
    </Card>
  );
};

export default SessionItem;
