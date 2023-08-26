import { useSocket } from "@/utils/useSocket";
import { Box, Container, Flex, Text, Image, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface StudentPanelProps {
  tImage: string;
}

const StudentPanel = ({ tImage }: StudentPanelProps) => {
  const socket = useSocket();

  useEffect(() => {
    socket.on("teacherImage", (data) => {
      console.log("registered new handler");

      console.log(data);
    });
  }, []);
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
        {tImage ? (
          <Image
            rounded={"2xl"}
            w="full"
            maxHeight={"100%"}
            h="full"
            maxWidth={"100%"}
            src={tImage}
            alt="Dan Abramov"
            objectFit="cover" // Use objectFit property with "contain"
          />
        ) : (
          <Flex
            w="full"
            h="full"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary"
              size="xl"
            />
          </Flex>
        )}
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
