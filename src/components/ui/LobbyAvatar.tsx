import { Avatar } from "@chakra-ui/react";
const LobbyAvatar = () => {
  return (
    <Avatar
      size={{ base: "md", sm: "lg", md: "xl" }}
      border={"0.15rem solid #FFD86C"}
      borderColor="red"
      p={1}
      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
    />
  );
};

export default LobbyAvatar;
