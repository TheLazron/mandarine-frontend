import { Card, Text, VStack } from "@chakra-ui/react";
import SessionItem from "./ui/SessionItem";

const SessionsCard = (): JSX.Element => {
  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      w="full"
      justifyContent={"flex-start"}
      h="full"
      py={8}
      px={8}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Text mb={4} fontWeight={200} fontSize={"xl"}>
        Your Sessions
      </Text>
      <VStack spacing={4}>
        <SessionItem />
        <SessionItem />
      </VStack>
    </Card>
  );
};

export default SessionsCard;
