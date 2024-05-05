import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";
import axios from "../api/axios";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `api/messages/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true },
      );

      setMessages([...messages, response.data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
