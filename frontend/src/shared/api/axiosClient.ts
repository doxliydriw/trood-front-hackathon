import axios from "axios";

export const axiosClient = axios.create({
    baseURL: '/api', // Use the proxy
    timeout: 1000,
    headers: { 'Accept': 'application/json' },
  });

axiosClient.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

export default axiosClient;
