import Axios from "./axios";

const api = new Axios({});

api.instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

api.instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

export default api;
