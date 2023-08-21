import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Accept-language": "Ar",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    // show loader
    config.headers["Token"] = "123456789";
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    console.log(response);
    // response.data.push("test")
    return response;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
