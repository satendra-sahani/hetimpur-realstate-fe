import api from "./apiInstance";

export const commonApi = {
  GET_USER: () => api.get("/auth/get-user"),
  LOGIN: payload => api.post("/auth/login", payload.data),
  SIGN_UP: payload => api.post("/sign-up", payload),
  FORGET_PASSWORD: payload => api.put("/forget-password", payload.data),
  RESET_PASSWORD: payload => api.put("/reset-password", payload),
  LOGOUT: () => api.get("/auth/logout"),
  EMAIL_VERIFICATION: payload => api.post("/email-verification", payload),
  RESEND_EMAIL_VERIFICATION: payload =>
    api.post("/resend-email-verification", payload),
  OPEN_CANDIDATE_LISTS: () => api.get("/get-spotlight-candidates"),
  JOB_LISTS: payload =>
    api.get(
      `/job-post?status=${payload?.pageType}&page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  OPEN_COMPANY_PROFILE: () => api.get("/get-client-spotlight"),
  UPLOAD_IMAGE:payload=>api.post("/upload-image/",payload.data),
  GET_CERTIFICATE_OPEN:payload=>api.get(`/get-certificate/${payload.testId}`),
  
};
