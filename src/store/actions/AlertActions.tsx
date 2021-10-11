import * as types from "./types";

export const showAlert = (data: any) => ({
  type: types.SHOW_ALERT,
  payload: data,
});

export const removeAllAlerts = () => ({
  type: types.REMOVE_ALL_ALERT,
});
export const setSpiner = (data: any) => ({
  type: types.SET_SPINNER,
  payload: data,
});
export const setProgress = (data: any) => ({
  type: types.SET_PROGRESS,
  payload: data,
});
export const reSetProgress = (data: any) => ({
  type: types.RESET_PROGRESS,
  payload: data,
});
