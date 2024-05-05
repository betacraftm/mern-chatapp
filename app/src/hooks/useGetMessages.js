import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import axios from "../api/axios";
import toast from "react-hot-toast";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/messages/${selectedConversation._id}`,
          { withCredentials: true },
        );

        setMessages(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedConversation?._id]);
  return { messages, loading };
};

export default useGetMessages;
