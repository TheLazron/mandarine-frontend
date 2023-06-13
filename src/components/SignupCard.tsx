import {
  Container,
  Input,
  Heading,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import CustomButton from "./ui/Button";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  username: string;
  password: string;
  email: string;
};

const SignupCard = (): JSX.Element => {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (errors.email) {
      console.log("error");

      toast({
        title: "Wrong Credentials",
        description: "Username and Password you entered are incorrect",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    try {
      console.log(data);
      const response = await axios.post("http://localhost:3010/login", {
        username: data.username,
        password: data.password,
        email: data.email,
      });

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (err) {
      toast({
        title: "Wrong Credentials",
        description: "Username and Password you entered are incorrect",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex w="50%" direction={"column"}>
      <Box mb={6}>
        <Heading>Sign Up</Heading>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={4}>
          <Input
            type="email"
            variant="filled"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <Text color="red.500" mt={1}>
              Name is required.
            </Text>
          )}
        </Box>
        <Box mb={4}>
          <Input
            variant="filled"
            placeholder="Username"
            {...register("username", {
              required: true,
            })}
          />
          {errors.email && (
            <Text color="red.500" mt={1}>
              Email is required.
            </Text>
          )}
        </Box>
        <Box mb={4}>
          <Input
            type="password"
            variant="filled"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <Text color="red.500" mt={1}>
              Password is required.
            </Text>
          )}
        </Box>
        <Flex gap={4}>
          <CustomButton type="submit" flex={3} variant="yellow">
            Sign Up
          </CustomButton>
          <Button flex={1}>
            <IconBrandGoogle size={24} />
          </Button>
        </Flex>
      </form>
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
