import {
  Card,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { IconArrowUpRight, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import CustomDivider from "./ui/CustomDivier";

const LobbyCard = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("dadw");
  const [enteredCode, setEnteredCode] = useState<string>("");
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
      bg: "t_light", // Set the desired color for disabled state
    },
  };

  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      w="full"
      h="full"
      p={6}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Text mb={2} fontWeight={200}>
        Create Lobby
      </Text>
      <InputGroup size="md" flexDirection={"column"}>
        <Input
          value={generatedCode}
          h={"4rem"}
          rounded={"2xl"}
          fontSize={"2xl"}
          disabled
          variant={"filled"}
          sx={inputStyle}
        />
        <InputRightElement h="full" w="3rem">
          <IconCopy color="white" size={"30px"} />
        </InputRightElement>
      </InputGroup>
      <Box my={7}>
        <CustomDivider text="OR" />
      </Box>
      <Text mb={2} fontWeight={200}>
        Join Lobby
      </Text>
      <InputGroup size="md" flexDirection={"column"}>
        <Input
          rounded={"2xl"}
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          h={"4rem"}
          fontSize={"2xl"}
          variant={"filled"}
          sx={inputStyle}
        />
        <InputRightElement h="full" w="3rem">
          <IconArrowUpRight color="white" size={"30px"} />
        </InputRightElement>
      </InputGroup>
    </Card>
  );
};

export default LobbyCard;
