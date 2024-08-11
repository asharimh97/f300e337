"use client";

import classNames from "classnames";
import BubleMessage from "../buble-message/BubleMessage";
import ChatboxHeader from "./ChatboxHeader";
import MessageCompose from "./MessageCompose";
import { useEffect, useState } from "react";
import { socket } from "@/src/socket";
import ChatContent from "./ChatContent";

function Chatbox() {
  const [totalClients, setTotalClients] = useState(0);
  useEffect(() => {
    socket.on("connected-clients", (data) => {
      setTotalClients(data);
    });
  }, []);

  return (
    <>
      <div id="chat-container" className="w-[450px]">
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <ChatboxHeader />
          <ChatContent />
          <MessageCompose />
        </div>
        <div className="mt-6 text-center font-semibold italic">
          Total online users: {totalClients}
        </div>
      </div>
    </>
  );
}

export default Chatbox;
