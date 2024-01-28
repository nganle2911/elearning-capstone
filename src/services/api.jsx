import axios from "axios";
import { store } from "..";
import { setIsLoadingOff, setIsLoadingOn } from "../redux/spinnerSlice/spinnerSlice";


export const https = axios.create({
  baseURL: 'https://elearningnew.cybersoft.edu.vn',
  headers: {
    TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU"
  }
});

// Add a request interceptor
https.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch(setIsLoadingOn())
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  store.dispatch(setIsLoadingOff())
  return response;
}, function (error) {
  store.dispatch(setIsLoadingOff());
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});