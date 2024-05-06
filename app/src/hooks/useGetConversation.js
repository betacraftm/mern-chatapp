import { useEffect, useState } from "react";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { setAuthUser } = useAuth();

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
