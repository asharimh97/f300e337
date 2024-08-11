"use client";

import Image from "next/image";
import useSocket from "../hooks/useSocket";
import { useEffect } from "react";

import { socket } from "../socket"
import Chatbox from "../components/chat-box/Chatbox";

export default function Home() {
  const { connected } = useSocket();

  useEffect(() => {
    if (connected) {
      console.log("Connected to the server");
    }
  }, [connected])

  const handleClick = () => {
    socket.emit("hello", "world");
    socket.on("hello", (data) => {
      console.log(data)
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chatbox />
    </main>
  );
}
