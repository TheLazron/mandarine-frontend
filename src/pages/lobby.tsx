import LobbyDetailsCard from "@/components/LobbyDetailsCard";
import LobbyMembers from "@/components/LobbyMembers";
import CustomButton from "@/components/ui/Button";
import LobbyAvatar from "@/components/ui/LobbyAvatar";

import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const LobbyPage = (): JSX.Element => {
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
          <LobbyDetailsCard />
        </Box>
        <Box flex={1} w="full">
          <LobbyMembers />
        </Box>
      </Flex>
    </Box>
  );
};

export default LobbyPage;
