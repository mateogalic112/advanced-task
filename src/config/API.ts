import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.colr.org/json/color/random",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default axiosInstance;
