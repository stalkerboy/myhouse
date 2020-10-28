import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { ServerCount } from "../../api/counter";
import { AsyncState } from "../../lib/reducerUtils";

export type CounterAction = ActionType<typeof actions>;

export type CounterState = {
  counterProfile: AsyncState<ServerCount, Error>;
};
