import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
const StudentPanel = () => {
  const [teacherImage, setTeacherImage] = useState<string>(
    "https://plus.unsplash.com/premium_photo-1688125414822-c1daf8543ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
  );
  return (
    <Flex py={12} gap={4} w="full" direction="column" h="full">
      <Box
        rounded="2xl"
        maxHeight={"sm"}
        minHeight={"sm"}
        objectFit={"cover"}
        // backgroundImage={teacherImage}
        w="full"
        flex={2}
      >
        <Image
          rounded={"2xl"}
          w="full"
          maxHeight={"100%"}
          h="full"
          maxWidth={"100%"}
          src={teacherImage}
          alt="Dan Abramov"
          objectFit="cover" // Use objectFit property with "contain"
        />
      </Box>
      <Flex
        rounded="2xl"
        justifyContent={"center"}
        alignItems={"center"}
        flex={5}
        bgColor="primary"
      >
        <Text fontWeight={"bold"} textAlign={"center"} flex="1">
          Your Score: 92%
        </Text>
      </Flex>
    </Flex>
  );
};

export default StudentPanel;
