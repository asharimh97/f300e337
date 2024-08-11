"use client";

import classNames from "classnames";
import BubleMessage from "../buble-message/BubleMessage";
import ChatboxHeader from "./ChatboxHeader";
import MessageCompose from "./MessageCompose";
import { useEffect, useState } from "react";
import { socket } from "@/src/socket";

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
          <div id="chatbox" className="p-4 h-[450px] overflow-y-auto">
            {/* <!-- Chat messages will be displayed here --> */}
            {/* <BubleMessage message="hello" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." />
            <BubleMessage message="this example of chat" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." />
            <BubleMessage message="design with tailwind" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." /> */}
          </div>
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
