import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { counter, counterSaga } from "./counter";
import { photo, photoSaga } from "./photo";
import { blog, blogSaga } from "./blog";
import { user, userSaga } from "./user";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
const rootReducer = combineReducers({
  counter,
  photo,
  blog,
  user,
});

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(sagaMiddleware))));

// 루트 사가를 만들어서 내보내주세요.
function* rootSaga() {
  yield all([counterSaga(), photoSaga(), blogSaga(), userSaga()]);
}

sagaMiddleware.run(rootSaga);

export { store };

export type RootState = ReturnType<typeof rootReducer>;
