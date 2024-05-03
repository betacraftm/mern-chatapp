const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src="" alt="Avatar" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 text-white">Hello</div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        12:42
      </div>
    </div>
  );
};

export default Message;
