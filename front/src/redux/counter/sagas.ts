import { getServerCountAsync, GET_SERVER_COUNT } from "./actions";
import { getServerCount, ServerCount } from "../../api/counter";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserProfileSaga(action: ReturnType<typeof getServerCountAsync.request>) {
  try {
    const counter: ServerCount = yield call(getServerCount, action.payload);
    yield put(getServerCountAsync.success(counter));
  } catch (e) {
    yield put(getServerCountAsync.failure(e));
  }
}

export function* counterSaga() {
  yield takeEvery(GET_SERVER_COUNT, getUserProfileSaga);
}
