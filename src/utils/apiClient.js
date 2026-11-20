import axios from "axios";
// const token = localStorage.getItem("token");
const token = "1|I97vEp2pMrJmfTdaQEoZML2iFZZ0mKBNXK5akXksd2c3148a";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
});
export default apiClient;
