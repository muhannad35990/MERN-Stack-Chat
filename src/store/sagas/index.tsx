import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/types";
import {
  registerUserSaga,
  loginUserSaga,
  forgotPasswordsaga,
  resetPasswordsaga,
  autoLoginUserSaga,
  updateCurrentPasswordSaga,
} from "./auth";

export function* watchAuth() {
  //auth
  yield all([takeEvery(types.REGISTER_USER, registerUserSaga)]);
  yield all([takeEvery(types.LOGIN_USER, loginUserSaga)]);
  //   yield all([takeEvery(types.UPDATE_ME, updateMeSaga)]);
  yield all([takeEvery(types.FORGOT_PASSWORD, forgotPasswordsaga)]);
  yield all([takeEvery(types.RESET_PASSWORD, resetPasswordsaga)]);
  yield all([takeEvery(types.AUTO_LOGIN, autoLoginUserSaga)]);
  yield all([takeEvery(types.UPDATE_PASSWORD, updateCurrentPasswordSaga)]);
}
