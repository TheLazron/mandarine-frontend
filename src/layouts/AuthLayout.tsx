import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <Flex h={"100vh"} color="white">
      <Flex
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"secondary"}
      >
        {children}
      </Flex>
      <Flex
        bgColor={"primary"}
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Image src="/auth.gif" alt="Example GIF" width={350} height={100} />
        <Text textAlign={"center"} w={"60%"} fontWeight={700}>
          Lets collaborate and learn.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
