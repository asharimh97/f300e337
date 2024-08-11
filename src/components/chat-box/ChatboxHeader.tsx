interface ChatboxHeaderProps {
  onClick: () => void;
}

function ChatboxHeader({ onClick }: ChatboxHeaderProps) {
  return (
    <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
      <p className="text-lg font-semibold">Admin Bot</p>
      <button
        id="close-chat"
        className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ChatboxHeader;
