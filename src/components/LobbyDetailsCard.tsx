import { Badge, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";

const inputStyle = {
  bg: "t_light",
  border: "none",
  _focus: {
    bg: "t_light",
    border: "none",
  },
  _hover: {
    bg: "t_light",
    border: "none",
  },
  _disabled: {
    bg: "t_light",
  },
};

const LobbyDetailsCard = (): JSX.Element => {
  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      justifyContent={"center"}
      w="full"
      py={3}
      px={3}
      alignItems={"center"}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Flex direction={"column"} gap={6} w="full" alignItems={"center"} p={2}>
        <Heading as="h4" size="lg">
          {"Session's Name"}
        </Heading>
        <Input
          mx={2}
          h={"3rem"}
          rounded={"2xl"}
          fontSize={"xl"}
          w={{ base: "90%", md: "70%" }}
          variant={"filled"}
          sx={inputStyle}
          placeholder="Enter Session Name"
        />
        <Badge
          opacity={0.6}
          fontSize="1rem"
          colorScheme="yellow"
          rounded={"3xl"}
          p={1}
          px={2}
        >
          #FFD86C
        </Badge>
      </Flex>
    </Card>
  );
};

export default LobbyDetailsCard;
