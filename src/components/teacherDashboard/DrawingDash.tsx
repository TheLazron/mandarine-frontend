import { Box, Button, Card, Flex, Heading, Text } from "@chakra-ui/react";
import FabricCanvas from "../FabricCanvas";

const DrawingDash = () => {
  return (
    <>
      <Box>
        <Card
          bgColor="t_dark"
          color="white"
          rounded={"2xl"}
          w="full"
          justifyContent={"flex-start"}
          h="full"
          mb={8}
          py={8}
          px={8}
          boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
        >
          <Flex mb={2} justifyContent={"space-between"} alignItems={"flex-end"}>
            <Heading
              color="primary"
              as="h4"
              size={{ base: "sm", sm: "md", md: "lg" }}
            >
              Chinese Class #11
            </Heading>
            <Text fontSize={{ base: "md", sm: "lg", md: "2xl" }}>Round 1</Text>
          </Flex>
          <Box w="full" h="md" rounded="2xl">
            <FabricCanvas />
          </Box>
        </Card>

        <Flex
          gap={2}
          justifyContent={{ base: "flex-start", md: "space-between" }}
          alignItems={"center"}
        >
          <Button colorScheme="red">End Session</Button>
          <Button>Next Round</Button>
        </Flex>
      </Box>
    </>
  );
};

export default DrawingDash;
