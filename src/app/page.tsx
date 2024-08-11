"use client";

import useSocket from "../hooks/useSocket";
import { useEffect, useMemo, useState } from "react";

import Chatbox from "../components/chat-box/Chatbox";
import UserContext from "../contexts/UserContext";
import { generateUsername } from "unique-username-generator";

export default function Home() {
  const { connected } = useSocket();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (connected) {
      setUsername(generateUsername());
    }
  }, [connected]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <UserContext.Provider value={username}>
        <Chatbox />
      </UserContext.Provider>
    </main>
  );
}
