/* eslint-disable react/prop-types */
import useConversation from "../../store/useConversation";
const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500 ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 h-1 py-0"></div>}
    </>
  );
};

export default Conversation;
