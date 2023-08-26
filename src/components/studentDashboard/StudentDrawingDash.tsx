import { Box, Button, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sessionState, userState } from "@/pages/_app";
import { useSocket } from "@/utils/useSocket";
import axios from "axios";
import FabricCanvas from "../FabricCanvas";

const StudentDrawingDash = () => {
  const canvasRef = useRef(null);

  const socket = useSocket();
  const user = useRecoilValue(userState);
  const [session, setSession] = useRecoilState(sessionState);

  useEffect(() => {
    socket.on("start-round", (data) => {
      console.log("signal to start new round");
      const cRef: any = canvasRef.current!;
      cRef.refreshCanvas();
      setSession((session) => {
        return {
          ...session,
          currentRoundNumber: session.currentRoundNumber + 1,
        };
      });
    });
  }, []);

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
              {user.currentRoomName}
            </Heading>
            <Text fontSize={{ base: "md", sm: "lg", md: "2xl" }}>
              Round {session.currentRoundNumber}
            </Text>
          </Flex>
          <Box w="full" h="md" rounded="2xl">
            <FabricCanvas ref={canvasRef} />
          </Box>
        </Card>

        <Flex
          gap={2}
          justifyContent={{ base: "flex-start", md: "flex-end" }}
          alignItems={"end"}
        >
          <Button>Submit Image</Button>
        </Flex>
      </Box>
    </>
  );
};

export default StudentDrawingDash;
