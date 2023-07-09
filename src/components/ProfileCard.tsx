import { Card, Heading, Flex, Avatar, Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const ProfileCard = (): JSX.Element => {
  const fontSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "xl",
  });

  const avatarSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded="2xl"
      w="full"
      h="full"
      py={8}
      justifyContent={"center"}
      px={8}
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
      gap={10}
    >
      <Flex justifyContent="space-between" alignItems="center" gap={1}>
        <Avatar
          bgColor="t_light"
          color="white"
          size={avatarSize}
          name="Aryaman Sharma"
          src="https://bit.ly/broken-link"
        />
        <Text decoration="ThreeDHighlight" noOfLines={1} fontSize={fontSize}>
          Aryaman Sharma
        </Text>
      </Flex>
      <Flex direction={"column"} justifyContent={"space-around"} gap={4}>
        <Flex justifyContent={"space-between"}>
          <Text
            color="white"
            opacity={0.6}
            fontWeight={"light"}
            fontSize={fontSize}
          >
            Total Sessions
          </Text>
          <Text fontWeight={"normal"} fontSize={fontSize}>
            32
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text
            color="white"
            opacity={0.6}
            fontWeight={"light"}
            fontSize={fontSize}
          >
            Hours
          </Text>
          <Text fontWeight={"normal"} fontSize={fontSize}>
            41
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text
            color="white"
            opacity={0.6}
            fontWeight={"light"}
            fontSize={fontSize}
          >
            Joined
          </Text>
          <Text fontWeight={"normal"} fontSize={fontSize}>
            11/02/2022
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Button w="full" rounded={"2xl"} variant="yellow">
          Edit Profile
        </Button>
      </Box>
    </Card>
  );
};

export default ProfileCard;
