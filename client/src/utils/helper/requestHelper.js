import axios from "axios";
import { STORAGE } from "../constants";

const apiInstance = axios.create({
  baseURL: "https://adoption-server.onrender.com/api/v1/",
});

apiInstance.interceptors.request.use(
  async (request) => {
    const { headers } = request;
    let accessToken = JSON.parse(localStorage.getItem(STORAGE.TOKEN)) ?? null;
    if (request.token) {
      headers.Authorization = `Bearer ${accessToken?.token}`;
    }
    headers["Content-Type"] = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

apiInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default apiInstance;
