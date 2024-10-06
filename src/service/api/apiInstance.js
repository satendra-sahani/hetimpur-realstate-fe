import axios from "axios";

const baseUrl = () => {
  let Base_url ="https://smartcomputer-api.vercel.app/"
  //  "https://smartcomputer-api.vercel.app/";
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