import UserContext from "@/src/contexts/UserContext";
import { socket } from "@/src/socket";
import { useContext, useEffect, useState } from "react";
import BubleMessage from "../buble-message/BubleMessage";
import { ChatMessage } from "@/src/types/chat";

function ChatContent() {
  const username = useContext(UserContext);
  const [messages, setMessages] = useState<Array<ChatMessage>>([]);

  useEffect(() => {
    const onMessageReceived = (data: ChatMessage) => {
      setMessages((prev) => [...prev, data]);
      const chatbox = document.getElementById("chatbox");
      chatbox?.scrollTo({
        top: chatbox.scrollHeight + 1000,
        behavior: "smooth",
      });
    };

    socket.on("chat-message", onMessageReceived);
    socket.on("message", onMessageReceived);

    return () => {
      socket.off("chat-message", onMessageReceived);
      socket.off("message", onMessageReceived);
    };
  }, []);
  return (
    <div id="chatbox" className="p-4 h-[450px] overflow-y-auto">
      {/* <!-- Chat messages will be displayed here --> */}
      {messages.map((message, index) => (
        <BubleMessage
          message={message.message}
          username={message.username}
          isUser={message.username === username}
          key={index}
        />
      ))}
    </div>
  );
}

export default ChatContent;
