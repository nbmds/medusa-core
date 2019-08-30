import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse,
} from "axios";
import { IBaseResponse } from "../interface";

interface IRequestInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
}

class HttpRequest {
  public instance: AxiosInstance;
  private baseURL: string;
  private headers: any;

  constructor({ baseURL, headers = {} }: AxiosRequestConfig) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.instance = axios.create();
  }

  get<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request<T>({
      url,
      method: "get",
      params: data,
      ...config,
    });
  }

  post<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request<T>({
      url,
      method: "post",
      data,
      ...config,
    });
  }

  put<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request<T>({
      url,
      method: "put",
      data,
      ...config,
    });
  }

  delete<T = any>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request<T>({
      url,
      method: "delete",
      data,
      ...config,
    });
  }

  public getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: this.headers,
    };
    return config;
  }

  public interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        console.log(res.config.url, "------>", res.data);
        if (res.data.code !== 200) {
          return Promise.reject(
            res.data.msg || res.data.message || "未知错误，请稍后再试",
          );
        }

        return res.data;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  public request<T = any>(options: AxiosRequestConfig) {
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(this.instance);
    return this.instance.request<T, IBaseResponse<T>>(options);
  }
}

export default HttpRequest;
