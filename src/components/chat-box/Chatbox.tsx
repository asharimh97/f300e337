"use client";

import { useState } from "react";
import ButtonChat from "../button-chat/ButtonChat";
import classNames from "classnames";
import BubleMessage from "../buble-message/BubleMessage";
import ChatboxHeader from "./ChatboxHeader";
import MessageCompose from "./MessageCompose";

function Chatbox() {
  const [showChat, setShowChat] = useState(true);
  return (
    <>
      <ButtonChat onClick={() => setShowChat((prevState) => !prevState)} />
      <div
        id="chat-container"
        className={classNames("fixed bottom-20 right-4 w-96", {
          hidden: !showChat,
        })}
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <ChatboxHeader onClick={() => setShowChat(false)} />
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            {/* <!-- Chat messages will be displayed here --> */}
            <BubleMessage message="hello" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." />
            <BubleMessage message="this example of chat" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." />
            <BubleMessage message="design with tailwind" isUser={true} />
            <BubleMessage message="This is a response from the chatbot." />
          </div>
          <MessageCompose />
        </div>
      </div>
    </>
  );
}

export default Chatbox;
