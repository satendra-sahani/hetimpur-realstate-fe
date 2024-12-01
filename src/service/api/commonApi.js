import api from "./apiInstance";

export const commonApi = {
  GET_USER: () => api.get("/auth/profile"),
  LOGIN: payload => api.post("/auth/login", payload.data),
  SIGN_UP: payload => api.post("/sign-up", payload),
  FORGET_PASSWORD: payload => api.put("/forget-password", payload.data),
  RESET_PASSWORD: payload => api.put("/reset-password", payload),
  LOGOUT: () => api.get("/auth/logout"),
  GENERATE_PAYMENT_LINK:({data})=>api.post("/user/razorpay/generate-payment-link",data)
};
