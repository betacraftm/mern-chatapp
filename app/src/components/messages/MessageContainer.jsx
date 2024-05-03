import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="mb-2 bg-slate-500 px-4 py-2">
            <span className="label-text">To:</span>{" "}
            <span className="font-bold text-gray-900">Hoang Ngoc Dat</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome Betacraft</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
