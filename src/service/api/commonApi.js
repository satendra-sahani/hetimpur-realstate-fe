import api from "./apiInstance";

export const commonApi = {
  GET_USER: () => api.get("/auth/profile"),
  LOGIN: payload => api.post("/auth/login", payload.data),
  SIGN_UP: payload => api.post("/auth/register", payload.data),
  FORGET_PASSWORD: payload => api.put("/forget-password", payload.data),
  RESET_PASSWORD: payload => api.put("/reset-password", payload),
  LOGOUT: () => api.get("/auth/logout"),
  GENERATE_PAYMENT_LINK:({data})=>api.post(`/${data?.userType}/razorpay/generate-payment-link`,data),
  VERIFY_PAYMENT_STATUS:({data})=>api.post("/razorpay/callback",data),
  SAVE_LAND:({userType,data})=>api.post(`/${userType}/lands`,data),
  GET_LAND:({userType,params})=>api.get(`/${userType}/lands?${params}`),
  UPDATE_LAND:({userType,id,data})=>api.put(`/${userType}/lands/${id}`,data),
  DELETE_LAND:({userType,id})=>api.delete(`/${userType}/lands/${id}`),
  UPLOAD_SINGLE_IMAGE:({data})=>api.post("/upload",data),
};
