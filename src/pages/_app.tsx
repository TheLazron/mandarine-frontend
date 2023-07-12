import "../styles/globals.css";
import "@fontsource/mansalva";
import "@fontsource-variable/inter";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/theme";
import { RecoilRoot, atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    name: null,
    id: null,
    email: null,
    role: null,
    currentRoomCode: "",
    currentRoomName: "",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
