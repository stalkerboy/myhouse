import { getBlogListAsync, GET_BLOG_LIST } from "./actions";
import { getBlogList, Blog } from "../../api/blog";
import { call, put, takeEvery } from "redux-saga/effects";

function* getBlogListSaga(action: ReturnType<typeof getBlogListAsync.request>) {
  try {
    const blogs: Blog[] = yield call(getBlogList, action.payload);
    yield put(getBlogListAsync.success(blogs));
  } catch (e) {
    yield put(getBlogListAsync.failure(e));
  }
}

export function* blogSaga() {
  yield takeEvery(GET_BLOG_LIST, getBlogListSaga);
}
