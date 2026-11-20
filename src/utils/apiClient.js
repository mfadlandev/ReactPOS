import axios from "axios";
// const token = localStorage.getItem("token");
const token = "1|78oBFfQ8dpH1usJs5Iwtr0tujW8Nc7c1VbUKQ7F3edc6fed8";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
});
export default apiClient;
