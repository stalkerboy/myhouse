import { getPhotoListAsync, GET_PHOTO_LIST } from "./actions";
import { getPhotoList, Photo } from "../../api/photo";
import { call, put, takeEvery } from "redux-saga/effects";

function* getPhotoListSaga(action: ReturnType<typeof getPhotoListAsync.request>) {
  try {
    const photos: Photo[] = yield call(getPhotoList, action.payload);
    yield put(getPhotoListAsync.success(photos));
  } catch (e) {
    yield put(getPhotoListAsync.failure(e));
  }
}

export function* photoSaga() {
  yield takeEvery(GET_PHOTO_LIST, getPhotoListSaga);
}
