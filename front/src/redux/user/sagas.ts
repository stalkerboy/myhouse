import { getUserProfileAsync, GET_USER_PROFILE, loginUserAsync, LOGIN_USER } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { IPropsUserProfile } from "../../types/UserType";
import { getUserProfile, loginUser } from "../../api/user";

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
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e) {
    yield put(getUserProfileAsync.failure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
}
