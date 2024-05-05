import axios from "axios";

const BASE_URL = "https://mern-chatapp-rr9s.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});
