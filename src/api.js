import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-ymyr.onrender.com",
  withCredentials: true,
});

export default api;
