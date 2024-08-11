import classNames from "classnames";

interface BubleMessageProps {
  message: string;
  username: string;
  isUser?: boolean;
}

function BubleMessage({
  message,
  username,
  isUser = false,
}: BubleMessageProps) {
  return (
    <div className={classNames("mb-2", { "text-right": isUser })}>
      {!isUser && <p className="text-sm text-gray-500">{username}</p>}
      <p
        className={classNames("rounded-lg py-2 px-4 inline-block", {
          "bg-blue-500 text-white": isUser,
          "bg-gray-200 text-gray-700": !isUser,
        })}
      >
        {message}
      </p>
    </div>
  );
}

export default BubleMessage;
