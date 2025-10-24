import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const createHttpClient = ({ baseURL }: { baseURL: string }) => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
    },
  });

  // ===== Request interceptor =====
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // e.g., attach auth:
    // const token = authStore.getState().token;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  // ===== Response interceptor =====
  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      // centralize logging/metrics/refresh-token, etc.
      return Promise.reject(error);
    },
  );

  /**
   * Unwraps AxiosResponse to return the data property to the app (Runs on request success)
   *
   * @param promise Promise of AxiosResponse type
   * @returns data property from AxiosResponse type
   */
  const extractResponseData = <R>(promise: Promise<AxiosResponse<R>>) =>
    promise.then((r) => r.data);

  return {
    get: <R>(url: string, config?: AxiosRequestConfig) => {
      return extractResponseData<R>(
        instance.get<R, AxiosResponse<R>>(url, config),
      );
    },
    post: <R, D>(url: string, body?: D, config?: AxiosRequestConfig<D>) => {
      return extractResponseData<R>(
        instance.post<R, AxiosResponse<R>, D>(url, body, config),
      );
    },
    put: <R, D>(url: string, body?: D, config?: AxiosRequestConfig<D>) => {
      return extractResponseData<R>(
        instance.put<R, AxiosResponse<R>, D>(url, body, config),
      );
    },
    patch: <R, D>(url: string, body?: D, config?: AxiosRequestConfig<D>) => {
      return extractResponseData<R>(
        instance.patch<R, AxiosResponse<R>, D>(url, body, config),
      );
    },
    delete: <R>(url: string, config?: AxiosRequestConfig) => {
      return extractResponseData<R>(
        instance.delete<R, AxiosResponse<R>>(url, config),
      );
    },
  };
};

const http = createHttpClient({
  baseURL: "/",
});

export default http;
