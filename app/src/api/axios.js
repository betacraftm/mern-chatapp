import axios from "axios";

const BASE_URL = "http://localhost:8904";

export default axios.create({
  baseURL: BASE_URL,
});