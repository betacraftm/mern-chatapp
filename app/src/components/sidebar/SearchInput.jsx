import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../store/useConversation";
import toast from "react-hot-toast";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const [conversations, setConversations] = useState([]);
  const { setAuthUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get conversations
    try {
      const response = await axios.get("/api/users", {
        withCredentials: true,
      });
      setConversations(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("The session has expired, please login again");
        console.log(error.response.data.message);
        setAuthUser(null);
      }
    }

    if (!search) return;
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle text-white">
        <FaSearch className="h-6 w-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
