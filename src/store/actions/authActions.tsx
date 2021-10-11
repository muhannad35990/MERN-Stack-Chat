import * as types from "./types";

export const registerUser = (authData: any) => ({
  type: types.REGISTER_USER, // used for triggering registerUserSaga
  payload: authData,
});
export const loginUser = (authData: any) => ({
  type: types.LOGIN_USER, // used for triggering loginUserSaga
  payload: authData,
});
export const autoLogin = (authData: any) => ({
  type: types.AUTO_LOGIN, // used for triggering autologinUserSaga
  payload: authData,
});
export const setUserData = (user: any) => ({
  type: types.SET_USER_DATA,
  payload: user,
});
export const logUserOut = () => ({ type: "LOG_OUT" });

export const forgotPassword = (email: any) => ({
  type: types.FORGOT_PASSWORD,
  payload: email,
});
export const resetPassword = (data: any) => ({
  type: types.RESET_PASSWORD,
  payload: data,
});

export const updatePassword = (data: any) => ({
  type: types.UPDATE_PASSWORD,
  payload: data,
});
