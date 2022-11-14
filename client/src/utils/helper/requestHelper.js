import axios from "axios";
import { STORAGE } from "../constants";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_DEV,
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
    return Promise.reject(error.response.data);
  }
);
export default apiInstance;
