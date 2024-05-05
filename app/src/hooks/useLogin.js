import { useState } from "react";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const login = async (userName, pwd) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/auth/login",
        { userName, pwd },
        { withCredentials: true },
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      setAuthUser(response.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
