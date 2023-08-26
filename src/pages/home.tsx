import LobbyCard from "@/components/LobbyCard";
import ProfileCard from "@/components/ProfileCard";
import SessionsCard from "@/components/SessionsCard";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "./_app";

const Dashboard = () => {
  const handleSubmit = async () => {
    console.log("hello");
    const response = await axios.post("http://localhost:3010/create-lobby", {
      withCredentials: true,
    });
  };

  return (
    <>
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
        position="relative"
        min-minHeight={"100vh"}
        height={"100vh"}
        overflow={"auto"}
      >
        <Heading px={16} mt={12} color="white" as="h3" fontWeight={"semibold"}>
          Mandarine
        </Heading>
        <Grid
          p={16}
          h={"full"}
          w={"full"}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(5, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          templateRows={{
            base: "repeat(3, auto)",
            md: "repeat(2, auto)",
          }}
          gap={12}
          bg="secondary"
        >
          <GridItem
            colSpan={{ base: 2, sm: 3, md: 3 }}
            rowSpan={{ base: 1, md: 1 }}
          >
            <LobbyCard />
          </GridItem>
          <GridItem
            colSpan={{ base: 2, sm: 2, md: 2 }}
            rowSpan={{ base: 1, md: 1 }}
          >
            <ProfileCard />
          </GridItem>
          <GridItem
            colSpan={{ base: 2, sm: 5, md: 5 }}
            rowSpan={{ base: 1, md: 2 }}
          >
            <SessionsCard />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
