import axios from "axios";

import { BACKEND_URL } from "../configs/endpointConfig";
import * as endpoints from "../configs/endpointConfig";
import store from "../store";
import * as AlertActions from "../store/actions/AlertActions";
import * as authActions from "../store/actions/authActions";

const AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 20000,
});
let retry = false;

AxiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response: any) => {
    store.dispatch(AlertActions.setSpiner(false));
    if (
      (response && response.status === 200) ||
      response.status === 201 ||
      response.status === 204
    ) {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        store.dispatch(authActions.setUserData(response.data.user));
      }

      store.dispatch(
        AlertActions.showAlert({
          type: "success",
          title: response.statusText,
          message: response.data.message,
        })
      );
    }
    return response;
  },
  (error: any) => {
    if (error.response && error.response.status === 401 && !retry) {
      retry = true;
      return refreshTheToken(error);
    } else if (error.response && error.response.status) {
      store.dispatch(AlertActions.setSpiner(false));
      store.dispatch(
        AlertActions.showAlert({
          type: "error",
          title: error.response.statusText,
          message: error.response.data.message
            ? error.response.data.message
            : error.response.statusText,
        })
      );
      return error;
    } else {
      store.dispatch(AlertActions.setSpiner(false));
      store.dispatch(
        AlertActions.showAlert({
          type: "error",
          title: "Network error",
          message: "Fail to Connect to the server ",
        })
      );
      return error;
    }
  }
);

const refreshTheToken = async (error: any) => {
  const data = JSON.parse(error.response.config.data);
  error.response.config.data = data;

  const refreshToken = localStorage.getItem("refreshToken");
  axios
    .post(endpoints.AUTO_LOGIN, { refreshToken })
    .then((response: any) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      error.response.config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      retry = false;
      return AxiosInstance(error.response.config).then((resp: any) => {
        return resp;
      });
    })
    .catch((err: any) => err);
};
export default AxiosInstance;
