import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASEURL + '/api/v1',
// });

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// console.log(process.env.REACT_APP_API_BASE_URL + "/api")

// interceptor for http
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject((error.response && error.response.data) || "Wrong Services")
// );

export default axiosInstance;
