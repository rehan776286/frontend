import axios from "axios";

const api = axios.create({
  // baseURL: "https://backend-ymyr.onrender.com",
  baseURL: "http://localhost:4000",

  withCredentials: true,
});

export default api;
