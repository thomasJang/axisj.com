import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = "";
const _axios = axios.create({
  baseURL: API_URL ?? "",
});

const prepareRequest = async (config: AxiosRequestConfig) => {
  config.headers ??= {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };
};

export interface ApiRequestConfig extends AxiosRequestConfig {
  tryTime?: number;
  ignoreError?: boolean;
  servicePath?: string;
}

export type ApiMethod = "get" | "delete" | "head" | "post" | "put" | "patch" | "request";

export const apiWrapper = async <P>(
  method: ApiMethod,
  route: string,
  body?: any,
  config: ApiRequestConfig = {},
): Promise<AxiosResponse<P>> => {
  await prepareRequest(config);

  // remove undefined | null
  for (const key in body) {
    if (body[key] === undefined) {
      delete body[key];
    }
  }

  const axiosConfig: AxiosRequestConfig = {
    ...config,
  };
  switch (method) {
    case "request": {
      axiosConfig.method = body.method;
      break;
    }
    case "get":
    case "delete":
    case "head": {
      if (body?.pageNumber !== undefined) {
        body.pageNumber = Math.max(body.pageNumber - 1, 0);
      }
      const searchParams = new URLSearchParams(body).toString();
      axiosConfig.method = method;
      axiosConfig.url = route + `${searchParams ? "?" + searchParams : ""}`;
      break;
    }
    case "post":
    case "put":
    case "patch": {
      axiosConfig.method = method;
      axiosConfig.url = route;
      axiosConfig.data = body;
      break;
    }
    default:
      break;
  }

  if (!axiosConfig.method) {
    throw { code: "ERR" };
  }

  const { data, ...rest } = await _axios(axiosConfig);

  if (!config.ignoreError && data.error && data.error.code) {
    const tryTime = config.tryTime ?? 0;

    // if (data.error.code === ApiErrorCode.EXPIRED_TOKEN && tryTime < 1) {
    //   const appData = getAppData();
    //   if (appData) {
    //     const { data: _data, headers } = await _axios.post(
    //       import.meta.env.VITE_TOKEN_REFRESH_ROUTER ?? "/api/token/refresh",
    //       {
    //         token: appData.refreshToken,
    //       },
    //       {
    //         headers: {
    //           Authorization: null,
    //         },
    //       },
    //     );
    //     if (_data.error && _data.error.code) {
    //       await delay(10);
    //
    //       if (_data.error.code === ApiErrorCode.INVALID_TOKEN) {
    //         useUserStore.getState().clearMe();
    //         usePageTabStore.getState().clearTab();
    //       } else if (_data.error.code === ApiErrorCode.INVALID_REFRESH_TOKEN) {
    //         useUserStore.getState().clearMe();
    //         usePageTabStore.getState().clearTab();
    //       } else {
    //         config.tryTime = tryTime + 1;
    //         throw new ApiError(_data.error.code, _data.error.message, _data.error.data);
    //       }
    //       return { data: data as P, ...rest };
    //     }
    //
    //     if (headers && headers.authorization) {
    //       setApiHeader(headers.authorization);
    //       // debugger;
    //       // console.log("appData", appData);
    //       setAppData({
    //         ...appData,
    //         authorization: headers.authorization,
    //         refreshToken: headers["refresh-token"] ?? "",
    //       });
    //     }
    //
    //     return await apiWrapper(method, route, body, config);
    //   }
    // }
    // throw new ApiError(data.error.code, data.error.message, data.error.data);
  }

  if (data && "page" in data) {
    data.page.pageNumber = Math.min(data.page.pageNumber + 1, data.page.pageCount);
  }

  return { data: data as P, ...rest };
};
export const setApiHeader = (token: string) => {
  _axios.defaults.headers.common["Authorization"] = token;
};
