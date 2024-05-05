/* eslint-disable react/prop-types */
import { useAuth } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubleBgColor = fromMe ? "bg-blue-500" : "";
  const formatTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubleBgColor} max-w-[300px] break-words pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        {formatTime}
      </div>
    </div>
  );
};

export default Message;
