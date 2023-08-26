import {
  Card,
  Text,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Box,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { IconArrowUpRight, IconPlus, IconSend } from "@tabler/icons-react";
import { useState } from "react";
import CustomDivider from "./ui/CustomDivier";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import CopyButton from "./ui/CopyButton";
import { userState } from "@/pages/_app";

const LobbyCard = () => {
  const [user, setUser] = useRecoilState(userState);
  const [enteredCode, setEnteredCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const createLobby = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3010/create-lobby",
        {},
        {
          withCredentials: true,
        }
      );
      console.log("creae lobby response: ", response.data);

      setUser((user) => ({
        ...user,
        currentRoomCode: response.data.id,
        currentRoomName: response.data.sessionName,
      }));
      router.push("/lobby");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const joinLobby = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3010/join-lobby/${enteredCode}`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser((user) => ({
        ...user,
        currentRoomCode: response.data.id,
        currentRoomName: response.data.sessionName,
      }));
      router.push("/lobby");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      justifyContent={"center"}
      w="full"
      h="full"
      py={8}
      px={8}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Text fontSize={"xl"} mb={2} fontWeight={200}>
        Create Lobby
      </Text>
      <Flex gap={4} alignItems={"center"}>
        <InputGroup flex={4} size="md" flexDirection={"column"}>
          <Input
            letterSpacing="0.5em"
            value={user.currentRoomCode}
            h={"4rem"}
            rounded={"2xl"}
            fontSize={"2xl"}
            disabled
            variant={"filled"}
            sx={inputStyle}
          />
          <InputRightElement h="full" w="4rem" cursor={"pointer"}>
            <CopyButton valueToCopy={user.currentRoomCode} />
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={createLobby}
          rounded={"2xl"}
          flex={1}
          h="full"
          w="full"
          variant="yellow"
          isLoading={loading}
        >
          <IconSend color="white" size={"30px"} />
        </Button>
      </Flex>

      <Box my={7}>
        <CustomDivider text="OR" />
      </Box>
      <Text fontSize={"xl"} mb={2} fontWeight={200}>
        Join Lobby
      </Text>
      <InputGroup size="md" flexDirection={"column"}>
        <Input
          letterSpacing="0.5em"
          rounded={"2xl"}
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          h={"4rem"}
          fontSize={"2xl"}
          variant={"filled"}
          sx={inputStyle}
        />
        <InputRightElement onClick={joinLobby} h="full" w="4rem">
          {loading ? (
            <Spinner />
          ) : (
            <IconArrowUpRight color="white" size={"30px"} />
          )}
        </InputRightElement>
      </InputGroup>
    </Card>
  );
};

export default LobbyCard;
