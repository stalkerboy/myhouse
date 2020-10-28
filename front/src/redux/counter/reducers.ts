import { createReducer } from "typesafe-actions";
import { CounterState, CounterAction } from "./types";
import { decrease, getServerCountAsync, increase } from "./actions";
import { createAsyncReducer, transformToArray } from "../../lib/reducerUtils";

const initialState: CounterState = {
  // counterProfile: asyncState.initial(),
  counterProfile: { data: { count: 0, msg: "" }, error: null, loading: false },
};

export const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(transformToArray(getServerCountAsync), createAsyncReducer(getServerCountAsync, "counterProfile"))
  .handleAction(increase, (state) => {
    if (state.counterProfile.data) state.counterProfile.data.count += 1;
    console.log("state.counterProfile.data:", state.counterProfile);
    return state;
  })
  .handleAction(decrease, (state) => {
    if (state.counterProfile.data) state.counterProfile.data.count -= 1;
    console.log("state.counterProfile.data:", state.counterProfile);
    return state;
  });
