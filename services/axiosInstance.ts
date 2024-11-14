import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to set the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // Access the token directly
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Add token to headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
