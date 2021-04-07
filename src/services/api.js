import axios from "axios";

const BACKEND_URL = `http://127.0.0.1:8080`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  BAD_REQUEST: 400,
};

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    // switch (response.status) {
    //   case HttpCode.UNAUTHORIZED:
    //     onUnauthorized();
    //     throw err;
    //   case HttpCode.BAD_REQUEST:
    //     throw err;
    //   default:
    //     throw err;
    // }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
