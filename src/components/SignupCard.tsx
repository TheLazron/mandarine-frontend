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

const SignupCard = (): JSX.Element => {
  return (
    <Flex w="50%" direction={"column"}>
      <Box mb={6}>
        <Heading>Sign Up</Heading>
      </Box>
      <Box mb={4}>
        <Input type="email" variant="filled" placeholder="Email" />
      </Box>
      <Box mb={4}>
        <Input variant="filled" placeholder="Username" />
      </Box>
      <Box mb={4}>
        <Input type="password" variant="filled" placeholder="Password" />
      </Box>
      <Flex gap={4}>
        <CustomButton flex={3} variant="yellow">
          Sign Up
        </CustomButton>
        <Button flex={1}>
          <IconBrandGoogle size={24} />
        </Button>
      </Flex>
      <Flex gap={1} mt={2} justifyContent={"center"} w="100%">
        <Text>{"Already have an account"} </Text>
        <Link href="/auth/login">
          <Text color={"blue.500"}>Sign In</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SignupCard;
