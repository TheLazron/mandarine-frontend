import "../styles/globals.css";
import "@fontsource/mansalva";
import "@fontsource-variable/inter";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/theme";
import { RecoilRoot, atom } from "recoil";
import { SocketProvider } from "@/utils/useSocket";

//recoil global user state
export const userState = atom({
  key: "userState",
  default: {
    name: null,
    id: null,
    email: null,
    role: "",
    joiningDate: null,
    currentRoomCode: "",
    sessionCount: 0,
    currentRoomName: "",
  },
});

export const sessionState = atom({
  key: "sessionState",
  default: {
    currentRoundNumber: 0,
    totalRounds: 0,
    currentRoomCode: "",
    currentRoomName: "",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SocketProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SocketProvider>
    </RecoilRoot>
  );
}

export default MyApp;
