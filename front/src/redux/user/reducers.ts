import { createReducer } from "typesafe-actions";
import { UserState, UserAction } from "./types";
import { getUserProfileAsync, loginUserAsync, logoutUserAsync } from "./actions";
import { createAsyncReducer, transformToArray } from "../../lib/reducerUtils";

const initialState: UserState = {
  // counterProfile: asyncState.initial(),
  userProfile: { data: null, error: null, loading: false },
};

export const user = createReducer<UserState, UserAction>(initialState)
  .handleAction(transformToArray(getUserProfileAsync), createAsyncReducer(getUserProfileAsync, "userProfile"))
  .handleAction(transformToArray(loginUserAsync) as any, createAsyncReducer(loginUserAsync, "userProfile"))
  .handleAction(transformToArray(logoutUserAsync) as any, createAsyncReducer(logoutUserAsync, "userProfile"));
