import { useRouter } from "next/router";
import LoginCard from "@/components/LoginCard";
import AuthLayout from "@/layouts/AuthLayout";
import SignupCard from "@/components/SignupCard";
import { Heading } from "@chakra-ui/react";

const AuthPage = () => {
  const router = useRouter();
  const { page } = router.query;
  return (
    <AuthLayout>
      {page === "login" ? (
        <LoginCard />
      ) : page === "signup" ? (
        <SignupCard />
      ) : (
        <Heading>404: Not Found</Heading>
      )}
    </AuthLayout>
  );
};

export default AuthPage;
