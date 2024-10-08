interface ButtonChatProps {
  onClick: () => void;
}

function ButtonChat({ onClick }: ButtonChatProps) {
  return (
    <div data-testid="btn-chat" className="fixed bottom-0 right-0 mb-4 mr-4">
      <button
        id="open-chat"
        className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition duration-300 flex items-center rounded-full"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ButtonChat;
