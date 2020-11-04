import { getUserProfileAsync, GET_USER_PROFILE, loginUserAsync, LOGIN_USER, logoutUserAsync, LOGOUT_USER } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { IPropsUserProfile } from "../../types/UserType";
import { getUserProfile, loginUser, logoutUser } from "../../api/user";
import { AxiosError } from "axios";

function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
  try {
    const userProfile: IPropsUserProfile = yield call(getUserProfile, action.payload);
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e) {
    yield put(getUserProfileAsync.failure(e));
  }
}

function* loginUserSaga(action: ReturnType<typeof loginUserAsync.request>) {
  try {
    const userProfile: IPropsUserProfile = yield call(loginUser, action.payload);
    yield put(loginUserAsync.success(userProfile));
  } catch (e) {
    yield put(loginUserAsync.failure(e));
  }
}

function* logoutUserSaga(action: ReturnType<typeof logoutUserAsync.request>) {
  try {
    const logoutState = yield call(logoutUser, action.payload);
    if (!logoutState) throw new Error("login failed");
    else yield put(loginUserAsync.success(null));
  } catch (e) {
    yield put(loginUserAsync.failure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
}
