import UserContext from "@/src/contexts/UserContext";
import { socket } from "@/src/socket";
import { useContext, useState } from "react";

function MessageCompose() {
  const [value, setValue] = useState("");
  const username = useContext(UserContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = () => {
    if (!value) return;
    socket.emit("message", {
      date: new Date(),
      message: value,
      username,
    });

    setValue("");
  };

  return (
    <div className="p-4 border-t flex">
      <input
        id="user-input"
        type="text"
        placeholder="Type a message"
        className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        id="send-button"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}

export default MessageCompose;
