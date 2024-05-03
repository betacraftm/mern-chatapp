const Conversation = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src="" alt="user avatar" />
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-200">Hoang Ngoc Dat</p>
        </div>
      </div>
      <div className="divider my-0 h-1 py-0"></div>
    </>
  );
};

export default Conversation;
