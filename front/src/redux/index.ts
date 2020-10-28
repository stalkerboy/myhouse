import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { counter, counterSaga } from "./counter";
import { photo, photoSaga } from "./photo";
import { blog, blogSaga } from "./blog";

//reducer
const rootReducer = combineReducers({
  counter,
  photo,
  blog,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// 루트 사가를 만들어서 내보내주세요.
function* rootSaga() {
  yield all([counterSaga(), photoSaga(), blogSaga()]);
}

sagaMiddleware.run(rootSaga);

export { store };

export type RootState = ReturnType<typeof rootReducer>;
