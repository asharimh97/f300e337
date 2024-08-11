import UserContext from "@/src/contexts/UserContext";
import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";

function ChatboxHeader() {
  const userName = useContext(UserContext);
  return (
    <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
        <FaCircleUser />
        <p className="ml-2 text-lg font-semibold">{userName}</p>
      </div>
    </div>
  );
}

export default ChatboxHeader;
