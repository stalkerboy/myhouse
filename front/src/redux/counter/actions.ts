import { createAction, createAsyncAction } from "typesafe-actions";
import { ServerCount } from "../../api/counter";
import { AxiosError } from "axios";

export const GET_SERVER_COUNT = "counter/GET_SERVER_COUNT";
export const GET_SERVER_COUNT_SUCCESS = "counter/GET_SERVER_COUNT_SUCCESS";
export const GET_SERVER_COUNT_ERROR = "counter/GET_SERVER_COUNT_ERROR";

export const getServerCountAsync = createAsyncAction(GET_SERVER_COUNT, GET_SERVER_COUNT_SUCCESS, GET_SERVER_COUNT_ERROR)<number, ServerCount, AxiosError>();

// 액션 생성함수를 선언합니다
export const increase = createAction("counter/INCREASE")();
export const decrease = createAction("counter/DECREASE")();
export const increaseBy = createAction("counter/INCREASE_BY")<number>(); // payload 타입을 Generics 로 설정해주세요.
