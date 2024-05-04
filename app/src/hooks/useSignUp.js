import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ fullName, userName, pwd, confirmPwd, gender }) => {
    const success = handleInputError({
      fullName,
      userName,
      pwd,
      confirmPwd,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/signup", {
        fullName,
        userName,
        pwd,
        confirmPwd,
        gender,
      });

      if (response.status === 201) toast.success("User created");
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

const handleInputError = ({ fullName, userName, pwd, confirmPwd, gender }) => {
  if (!fullName || !userName || !pwd || !confirmPwd || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (pwd !== confirmPwd) {
    toast.error("Password do not match");
    return false;
  }

  if (pwd.length < 6) {
    toast.error("Password must at least 6 characters");
    return false;
  }
  return true;
};
