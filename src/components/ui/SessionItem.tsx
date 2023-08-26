import { Card, Text, Flex } from "@chakra-ui/react";
import { format } from "date-fns";

interface SessionItemProps {
  name: string;
  date: string;
  duration: number;
}

const SessionItem = ({ name, date, duration }: SessionItemProps) => {
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
        <Text alignSelf={"flex-start"} flex={1}>
          {name}
        </Text>
        <Text alignSelf={"center"} flex={1}>
          {format(new Date(date), "dd MMM yy")}
        </Text>
        <Text>{`${duration} s`}</Text>
      </Flex>
    </Card>
  );
};

export default SessionItem;
