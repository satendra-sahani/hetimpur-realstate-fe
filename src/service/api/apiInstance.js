import axios from "axios";

const baseUrl = () => {
  let Base_url ="https://be.clbhoomi.com/api/";
  //  "https://be.clbhoomi.com/api/";
  // http://localhost:9000/

  return Base_url;
};

const api = axios.create({
  baseURL: baseUrl(), // WithCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

export default api;