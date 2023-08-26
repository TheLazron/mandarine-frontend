import React, { createContext, useContext, useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface SocketHandlers {
  [eventName: string]: (data: any) => void;
}

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("Socket nicht defined");
  }
  return socket;
};

export const SocketProvider = ({ children }: AuthProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3010", {
      withCredentials: true,
    });
    setSocket(newSocket);
    console.log("Socket connected using hook");

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlers: SocketHandlers = {
      messageRecieved: (data) => {
        console.log("Message recieved from context", data);
        return data;
      },
    };

    if (socket) {
      Object.entries(handlers).forEach(([eventName, handler]) => {
        socket.on(eventName, handler);
      });
    }

    return () => {
      if (socket) {
        Object.entries(handlers).forEach(([eventName, handler]) => {
          socket.off(eventName, handler);
        });
      }
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
