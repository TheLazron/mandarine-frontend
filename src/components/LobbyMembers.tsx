import { Card, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LobbyAvatar from "./ui/LobbyAvatar";
import socket from "@/utils/socketUtils";

const LobbyMembers = (): JSX.Element => {
  const [members, setMembers] = useState<Array<object>>([]);

  useEffect(() => {
    socket.on("newUser", (data) => {
      console.log("new user", data);
      setMembers(data.users);
    });
  }, []);
  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      justifyContent={"center"}
      w="full"
      h="full"
      p={12}
      pt={4}
      alignItems={"center"}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Flex direction={"column"} w="full" justifyContent={"center"} gap={8}>
        <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"light"}>
          Lobby Members
        </Text>
        <Grid
          justifyContent="space-evenly"
          rowGap={6}
          templateColumns={{
            base: "repeat(3, auto)",
            sm: "repeat(5, auto)",
            md: "repeat(6, auto)",
            lg: "repeat(8, auto)",
          }}
          w="full"
          gap={2}
        >
          {members.map((item, index) => (
            <GridItem key={index}>
              <LobbyAvatar />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Card>
  );
};

export default LobbyMembers;
