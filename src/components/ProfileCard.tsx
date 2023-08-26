import { userState } from "@/pages/_app";
import { Card, Heading, Flex, Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { format, parseISO } from "date-fns";
import _ from "lodash";
import Avatar from "boring-avatars";

const ProfileCard = (): JSX.Element => {
  const user = useRecoilValue(userState);

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
          size={50}
          name={user.name!}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          // bgColor="t_light"
          // color="white"
          // size={avatarSize}
          // name="Aryaman Sharma"
          // src="https://bit.ly/broken-link"
        />
        <Text decoration="ThreeDHighlight" noOfLines={1} fontSize={fontSize}>
          {_.capitalize(user.name!)}
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
            {user.sessionCount}
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
            {format(new Date(user.joiningDate!), "dd MMM yyyy")}
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
