import { Box, Button, Card, Flex, Heading, Text } from "@chakra-ui/react";
import FabricCanvas from "../FabricCanvas";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sessionState, userState } from "@/pages/_app";
import { useSocket } from "@/utils/useSocket";
import axios from "axios";

const DrawingDash = () => {
  const canvasRef = useRef(null);

  const socket = useSocket();
  const user = useRecoilValue(userState);
  const [session, setSession] = useRecoilState(sessionState);

  const endRound = async () => {
    const response = await axios.post(
      `http://localhost:3010/remove-round/${user.currentRoomCode}`
    );
    if (response.status == 200) {
      console.log("all round deleted");
    } else {
      console.log("error deleting all round");
    }
  };

  const startNextRound = async () => {
    const response = await axios.post(
      `http://localhost:3010/remove-room/${user.currentRoomCode}`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log(response.data);

    if (response.status == 200) {
      console.log("previous round deleted");
      const response2 = await axios.post(
        `http://localhost:3010/create-room/${user.currentRoomCode}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response2.status == 200) {
        console.log("new round started");
        // setRoundChange((prevState) => !prevState);
        const cRef: any = canvasRef.current!;
        cRef.refreshCanvas();
        setSession((session) => {
          return {
            ...session,
            currentRoundNumber: session.currentRoundNumber + 1,
          };
        });
      } else {
        console.log("error creating new round");
      }
    } else {
      console.log("error deleting previous round");
    }

    const endRound = () => {};
  };
  useEffect(() => {
    console.log("will it work on student side??");
    socket.on("teacherImage", (data) => {
      console.log("registered new handler");

      console.log(data);
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
          justifyContent={{ base: "flex-start", md: "space-between" }}
          alignItems={"center"}
        >
          <Button onClick={endRound} colorScheme="red">
            End Session
          </Button>
          <Button
            onClick={() => {
              // setSubmitChange((prevState) => !prevState);
              startNextRound();
            }}
          >
            Next Round
          </Button>
          <Button
            onClick={() => {
              const cRef: any = canvasRef.current!;
              cRef.submitImage();
            }}
          >
            Submit Image
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default DrawingDash;
