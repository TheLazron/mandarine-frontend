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
import { useRecoilState } from "recoil";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSocket } from "@/utils/useSocket";
import { userState } from "@/pages/_app";

type FormValues = {
  username: string;
  password: string;
};

const LoginCard = (): JSX.Element => {
  const socket = useSocket();
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3010/login",
        {
          username: data.username,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("res", response);
      setUser((user) => ({
        ...user,
        email: response.data.user.email,
        id: response.data.user.id,
        name: response.data.user.username,
        joiningDate: response.data.user.joiningDate,
        sessionCount: response.data.sessionCount,
      }));

      if (response.status === 200) {
        socket.on("message", (data) => {
          console.log("Received message:", data);
        });
        socket.connect();
        router.push("/home");
      } else if (response.status === 401) {
        toast({
          title: "Wrong Credentials",
          description: "Username and Password you entered are incorrect",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Please Try Again Later",
        description: "We are facing some issues",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex w="50%" direction={"column"}>
      <Box mb={6}>
        <Heading>Sign In</Heading>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={4}>
          <Input
            variant="filled"
            placeholder="Username"
            {...register("username", {
              required: true,
            })}
          />
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
        </Box>
        <Flex gap={4}>
          <CustomButton type="submit" flex={3} variant="yellow">
            Sign In
          </CustomButton>
          <Button flex={1}>
            <IconBrandGoogle size={24} />
          </Button>
        </Flex>
      </form>
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
