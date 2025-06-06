import axios from "axios";

const axiosInstance = axios.create({
  // TODO: 동적으로 변경되게 수정하기
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청을 보내기 전에 토큰 붙이기
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답을 받았을 때 공통 에러 처리
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 예: 401 Unauthorized 발생 시 로그인 페이지로 리다이렉트
    if (error.response?.status === 401) {
      // TODO: 필요하다면 context나 history.push 등을 사용해 로그아웃 처리
      console.error("인증 실패 - 로그인 필요");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
