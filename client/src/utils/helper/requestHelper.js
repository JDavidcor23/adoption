import axios from "axios";
// import { STORAGE } from "../constants";
import { base } from "./endpoints";

const apiInstance = axios.create({ baseURL: base });

apiInstance.interceptors.request.use(
  async (request) => {
    // const { headers } = request;
    // let accessToken   =
    //   localStorage.getItem(STORAGE.USER) ?? null; ;

    // if (request.token) {
    //   let isExpired = validateToken(accessToken?.ACCESS_TOKEN);
    //   if (isExpired) {
    //     const resp = await refreshToken(accessToken?.REFRESH_TOKEN);
    //     headers.Authorization = `Bearer ${resp}`;
    //   } else {
    //     headers.Authorization = `Bearer ${accessToken?.ACCESS_TOKEN}`;
    //   }
    // }
    // headers["Content-Type"] = "application/json";
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
