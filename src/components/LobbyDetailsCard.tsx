import { userState } from "@/pages/_app";
import { Badge, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import CopyButton from "./ui/CopyButton";

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

interface LobbtDetailsCardProps {
  sessionName: string;
  setSessionName: (name: string) => void;
}

const LobbyDetailsCard = ({
  setSessionName,
  sessionName,
}: LobbtDetailsCardProps): JSX.Element => {
  const user = useRecoilValue(userState);
  const [localSessionName, setLocalSessionName] = useState(sessionName);
  useEffect(() => {
    setSessionName(user.currentRoomName);
  }, []);

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
          value={sessionName}
          sx={inputStyle}
          onChange={(e) => {
            const sessionName = e.target.value;
            setLocalSessionName(sessionName);
            setSessionName(sessionName);
          }}
          placeholder="Enter Session Name"
        />
        <Badge
          opacity={0.6}
          fontSize="1rem"
          colorScheme="yellow"
          rounded={"3xl"}
          // py={1}
          px={3}
        >
          <Flex gap={2} alignItems={"center"} justifyContent={"space-between"}>
            {user.currentRoomCode}
            <CopyButton valueToCopy={user.currentRoomCode} />
          </Flex>
        </Badge>
      </Flex>
    </Card>
  );
};

export default LobbyDetailsCard;
