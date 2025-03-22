import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.message || 'Unknown error';
    return Promise.reject(new Error(errorMessage));
  }
);

export default axiosInstance;
