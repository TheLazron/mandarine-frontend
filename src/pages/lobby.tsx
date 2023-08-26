import LobbyDetailsCard from "@/components/LobbyDetailsCard";
import LobbyMembers from "@/components/LobbyMembers";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { sessionState, userState } from "./_app";
import { useSocket } from "@/utils/useSocket";

const LobbyPage = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userState);
  const [session, setSession] = useRecoilState(sessionState);
  const [sessionName, setSessionName] = useState<string | null>(null);
  const router = useRouter();

  const startSession = async () => {
    try {
      const requestBody = sessionName ? { name: sessionName } : {};
      console.log("requesting session creation with name", sessionName);
      const response = await axios.post(
        `http://localhost:3010/start-session/${user.currentRoomCode}`,
        requestBody,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setUser((user) => ({
          ...user,
          role: "teacher",
          currentRoomName: sessionName!,
        }));
        console.log("response", response.data);
        setSession((session) => {
          return {
            ...session,
            currentRoundNumber: 1,
          };
        });
        router.push("/rounddasht");

        // router.push("/rounddasht");
      } else {
        console.log("Request was not successful.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const socket = useSocket();
  useEffect(() => {
    console.log("seeting up startSession handler");
    socket.on("start-session", (data) => {
      console.log("are we inside", user.role);
      setUser((user) => ({
        ...user,
        currentRoomName: data,
      }));
      if (user.role != "teacher") {
        console.log("Redirecting student", data);
        router.push("/rounddashs");
        setSession((session) => {
          return {
            ...session,
            currentRoundNumber: 1,
          };
        });
      }
    });
  }, []);
  return (
    <Box
      _before={{
        content: '""',
        position: "absolute",
        bgColor: "rgba(0, 0, 1, 0)",
        top: -10,
        left: 25,
        width: "2px",
        height: "2px",
        boxShadow: "5rem 2rem 1000rem 15rem rgba(255, 216, 108, 0.4)",
      }}
      bg="secondary"
      position={"relative"}
      minH={"100vh"}
      height={"100vh"}
      overflow={"auto"}
    >
      <Button
        bottom={5}
        variant={"yellow"}
        left="50%"
        rounded="2xl"
        transform="translateX(-50%)"
        position="fixed"
        zIndex={4}
        boxShadow="5rem 2rem 150rem 10rem rgba(0, 0, 0, 0.8)"
        onClick={startSession}
      >
        Start Session
      </Button>
      <Heading p={16} mt={12} color="white" as="h3" fontWeight={"semibold"}>
        Mandarine
      </Heading>
      <Flex
        w="full"
        h="full"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        p={16}
        pb={0}
        gap={6}
      >
        <Box w="full">
          <LobbyDetailsCard
            sessionName={sessionName!}
            setSessionName={setSessionName}
          />
        </Box>

        <Box flex={1} w="full">
          <LobbyMembers />
        </Box>
      </Flex>
    </Box>
  );
};

export default LobbyPage;
