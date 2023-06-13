import {
  Container,
  Input,
  Heading,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import CustomButton from "./ui/Button";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import axios from "axios";

const LoginCard = (): JSX.Element => {
  const handleclick = async () => {
    const results = await axios.post("http://localhost:3010/login", {
      username: "kyle",
      password: "test",
    });

    console.log(results);
  };
  return (
    <Flex w="50%" direction={"column"}>
      <Box mb={6}>
        <Heading>Sign In</Heading>
      </Box>
      <Box mb={4}>
        <Input variant="filled" placeholder="Username" />
      </Box>
      <Box mb={4}>
        <Input type="password" variant="filled" placeholder="Password" />
      </Box>
      <Flex gap={4}>
        <CustomButton onClick={handleclick} flex={3} variant="yellow">
          Sign In
        </CustomButton>
        <Button flex={1}>
          <IconBrandGoogle size={24} />
        </Button>
      </Flex>
      <Flex gap={1} mt={2} justifyContent={"center"} w="100%">
        <Text>{"Don't have an account?"} </Text>
        <Link href="/auth/signup">
          <Text color={"blue.500"}>Sign Up</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default LoginCard;
