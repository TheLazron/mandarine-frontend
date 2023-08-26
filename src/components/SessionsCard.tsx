import { Card, Text, VStack } from "@chakra-ui/react";
import SessionItem from "./ui/SessionItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { userState } from "@/pages/_app";
import { useRecoilValue } from "recoil";

const SessionsCard = (): JSX.Element => {
  //make request to user-sessions endpoint
  const [sessions, setSessions] = useState<any[]>([]); //array of objects of type Session
  const user = useRecoilValue(userState);
  useEffect(() => {
    //make request to user-sessions endpoint
    const getSessions = async () => {
      const response = await axios.get(
        `http://localhost:3010/user-sessions/${user.id}`,
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.);
      setSessions(response.data.sessions);
    };
    getSessions();
  }, []);

  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      w="full"
      justifyContent={"flex-start"}
      // h="full"
      py={8}
      px={8}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
      maxH={350}
      overflowY={"auto"}
    >
      <Text mb={4} fontWeight={200} fontSize={"xl"}>
        Your Sessions
      </Text>
      <VStack spacing={4}>
        {sessions.map((session) => {
          console.log(session.createdAt);
          return (
            <SessionItem
              key={session.id}
              name={session.name}
              date={session.createdAt}
              duration={session.duration}
            />
          );
        })}
      </VStack>
    </Card>
  );
};

export default SessionsCard;
